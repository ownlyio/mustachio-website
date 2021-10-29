import './App.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import FAQs from './components/faqs/FAQs'
import Assets from './components/assets/Assets'
import { Discord } from './components/ShortLinks'

// Utils
// import contract from './utils/contract'
import contract from './utils/contractDev'
import getCurrentNetwork from './utils/getCurrentNetwork'
import getCurrentWalletConnected  from './utils/getCurrentWalletConnected'
import ScrollToTop from './utils/scrolltoTop'

// Images
import grid from './images/grid.jpg'
import grid2 from './images/grid2.jpg'
import mustachioBanner from './images/mustachio_banner.jpeg'
import prospector from './images/prospector.jpg'
import ticket from './images/ticket.png'
import quest from './images/quest.png'
import mustachioToken from './images/mustachio.png'
import book from './images/book.png'
import mustachiosGroup from './images/mustachios_group.png'
import mustacheBoii from './images/mustache_boii.jpg'
import metamask from './images/metamask.png'
import loading from './images/loading-mustachio.gif'
import bgGIF from './images/mustachio_bg_gif.gif'
import collectibles from './images/collectibles.png'

// Team
import abracadoobie from './images/team/abracadoobie.png'
import candyfloss from './images/team/candyfloss.png'
import grim from './images/team/grim.png'
import kingstellar from './images/team/kingstellar.png'
import mexico from './images/team/mexico.png'
import mountainwarrior from './images/team/mountainwarrior.png'
import ninja from './images/team/ninja.png'
import slendie from './images/team/slendie.png'
import sludgie from './images/team/sludgie.png'
import squarehead from './images/team/squarehead.png'
 
function App() {
    // State variables for initialization
    const [walletAddress, setWallet] = useState("")
    const [status, setStatus] = useState(0)
    const [network, setNetwork] = useState("")
    const [netStatus, setNetStatus] = useState(0)
    const [tokenId, setTokenId] = useState(0)

    // State variables for minting
    const [txHash, setTxHash] = useState("")
    const [txError, setTxError] = useState("")
    const [txData, setTxData] = useState([])

    // Other Variables (Change upon deployment)
    const explorerUrl = "https://rinkeby.etherscan.io/tx/"
    // const explorerUrl = "https://etherscan.io/tx/"
    const contractAddress = "0x421dC2b62713223491Daf075C23B39EF0E340E94" // Rinkeby
    // const contractAddress = "0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" // MainNet
    const openSeaUrl = "https://testnets.opensea.io/assets/" + contractAddress + "/"
    // const openSeaUrl = "https://opensea.io/assets/" + contractAddress + "/"
    const marketplaceUrl = "https://ownly.io/marketplace/?contract=" + contractAddress + "&token=" // (Production only)

    // Modals
    const [showMetamaskInstall, setShowMetamaskInstall] = useState(false);
    const handleCloseMetamaskInstall = () => setShowMetamaskInstall(false);
    const handleShowMetamaskInstall = () => setShowMetamaskInstall(true);
    const [showWrongNetwork, setShowWrongNetwork] = useState(false);
    const handleCloseWrongNetwork = () => setShowWrongNetwork(false);
    const handleShowWrongNetwork = () => setShowWrongNetwork(true);
    const [showOnProcess, setShowOnProcess] = useState(false);
    const handleCloseOnProcess = () => setShowOnProcess(false);
    const handleShowOnProcess = () => setShowOnProcess(true);
    const [showOnError, setShowOnError] = useState(false);
    const handleCloseOnError = () => setShowOnError(false);
    const handleShowOnError = () => setShowOnError(true);
    const [showOnSuccess, setShowOnSuccess] = useState(false);
    const handleCloseOnSuccess = () => setShowOnSuccess(false);
    const handleShowOnSuccess = () => setShowOnSuccess(true);
    const [showSoldOut, setShowSoldOut] = useState(false);
    const handleCloseSoldOut = () => setShowSoldOut(false);
    const handleShowSoldOut = () => setShowSoldOut(true);

    // Initialize wallet address and network upon button click
    // Then mint afterwards
    const initUtilsAndMint = async () => {
        const walletResponse = await getCurrentWalletConnected()
        const networkResponse = await getCurrentNetwork()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
        setNetwork(networkResponse.network)
        setNetStatus(networkResponse.netStatus)

        if (status === 1) {
            if (network === "rinkeby") {
            // if (network === "main") {
                mintMustachio()
            } else {
                handleShowWrongNetwork()
            }
        } else if (status === 0) {
            handleShowMetamaskInstall()
        }
    }

    // Event Listener for Metamask Account Change
    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0])
                    setStatus(1)
                } else {
                    setWallet("");
                    setStatus(2)
                }
            })
        } else {
          setStatus(0);
        }
    }

    // Event Listener for Metamask Network Change
    const addNetworkListener = () => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', async function(networkIdMM){
                const networkResponseOnLoad = await getCurrentNetwork(1)
                setNetwork(networkResponseOnLoad.network)
                setNetStatus(networkResponseOnLoad.netStatus)
            });            
        }
    }

    // shorten addresses and/or txHashes
    // const shortenAddress = (address, prefixCount, postfixCount) => {
    //     let prefix = address.substr(0, prefixCount);
    //     let postfix = address.substr(address.length - postfixCount, address.length);
    
    //     return prefix + "..." + postfix;
    // };

    // Mint
    const mintMustachio = async () => {
        const lastId = await contract.methods.getLastMintedTokenId().call()

        if (lastId < 100) {
            const mintPrice = await contract.methods.getMintPrice().call()
            await contract.methods.mintMustachio().send({
                from: walletAddress,
                value: mintPrice,
                type: '0x2',
            })
            .on('transactionHash', function(hash){
                handleShowOnProcess()
            })
            .on('error', function(error) {
                handleCloseOnProcess()
                handleShowOnError()
                setTxError(error.message)
            })
            .then(async function(receipt) {
                handleCloseOnProcess()
                handleShowOnSuccess()
                setTxHash(receipt.transactionHash)
                setTxData(receipt)

                // Get TokenID
                const lastTokenId = await contract.methods.getLastMintedTokenId().call()
                setTokenId(lastTokenId)
            })
        } else {
            handleShowSoldOut()
        }
    } 

    // Initialize wallet address and network if Metamask is already connected
    // Watches for the listeners' update
    useEffect(() => {
        async function initUtilsOnLoad() {
            const {address, status} = await getCurrentWalletConnected();
            const {network, netStatus} = await getCurrentNetwork();
            setWallet(address)
            setStatus(status)
            setNetwork(network)
            setNetStatus(netStatus)

            if (status === 0) {
                handleShowMetamaskInstall()
            }
        }

        initUtilsOnLoad()
        addWalletListener()
        addNetworkListener()
    }, []);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <div className="app">
                <Navbar mintBtn={initUtilsAndMint} />
                <Switch>
                    <Route exact path="/">
                        <div className="app-content">
                            <div className="container">
                                <section className="app-banner" id="app-banner">
                                    <img className="w-100 lg-banner" src={grid} alt="Mustachio Banner" />
                                    <img className="w-100 xs-banner d-none" src={grid2} alt="Mustachio Banner" />
                                </section>
                                <section id="app-welcome" className="py-4">
                                    <div className="row mb-4">
                                        <div className="col-lg-6 col-12">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Welcome to The Mustachios!</h1>
                                            <p className="text-white text-lg font-andes">With his mighty pen and a slight quiver on his shoulders, Boii Mustache have yet created another masterpiece... in the form of The Mustachios, the first-ever NFT Tales before our eyes, so we can transport as Mustachios to this mysterious island concealed on earth - the MustachioVerse.</p>
                                            <p className="text-white text-lg font-andes">Together, let's open The Sages Rant and read our story of how we triumphed over the 998 other Mustachios in our quest to find The Golden Mustache, and how we became the mustached hero.</p>
                                        </div>
                                        <div className="my-lg-auto col-lg-5 col-12 offset-lg-1">
                                            <img className="w-100" src={mustachioBanner} alt="Mustachio Banner" />
                                        </div>
                                    </div>
                                </section>

                                <section id="app-mint" className="mb-4">
                                    <div className="row p-4 m-auto">
                                        <div className="m-auto col-lg-3 col-12">
                                            <h3 className="font-w-hermann w-hermann-semibold text-white text-center">MINT YOUR MUSTACHIO</h3>
                                        </div>
                                        <div className="m-auto col-lg-4 col-12 offset-lg-1">
                                            <p className="text-justify text-lg font-andes text-white mb-lg-0">Get ready to discover the secrets and adventures that lie within MustachioVerse. Mint your OWN Mustachio today.</p>
                                        </div>
                                        <div className="m-auto col-lg-3 col-12 offset-lg-1">
                                            <button id="app-mint-button" className="btn w-100 py-3 btn-custom-1 text-2xl font-w-hermann w-hermann-semibold" type="button" onClick={initUtilsAndMint}>MINT YOURS NOW!</button>
                                            <a className="btn text-center mt-2 w-100 text-lg font-andes-med text-sm text-gen-color how" href="https://ownly.io/htmym" target="_blank" rel="noreferrer">How to mint?</a>
                                        </div>
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <section id="tales" className="mb-4">
                                    <div className="row mb-4">
                                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Tale of the Prospector</h1>
                                            <p className="text-white text-lg font-andes">O, when the Mustachios dwell in the MustachioVerse, there is but one Mustachio who stood out among the rest.</p>
                                            <p className="text-white text-lg font-andes">The Prospector, supreme beyond all MustachioKind, who bore in his mighty hands all 9 artifacts from the fabled Grooming Kit.</p>
                                            <p className="text-white text-lg font-andes">He who dared seek success and happiness through audacious exploits that moved mountains and changed the courses of the rivers.</p>
                                            <p className="text-white text-lg font-andes">The Prospector.</p>
                                            <p className="text-white text-lg font-andes">You'll hear more about this noble legend who brought honour to the land of mustached beings and born explorers in two ticks.</p>
                                            <div className="app-tales-link-wrap">
                                                <a href="https://tales.mustachioverse.com" className="btn app-tales-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">ENTER THE MUSTACHIOVERSE</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12 offset-lg-1 order-1 order-lg-2 prospector">
                                            <img className="w-100" src={prospector} alt="Prospector" />
                                        </div>
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <section id="app-specs" className="mb-4">
                                    <div className="row mb-4">
                                        <div className="col-lg-7 col-12">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Why Mint our Mustachios?</h1>
                                            <p className="text-white text-lg font-andes">When you mint a Mustachio, you’re not simply buying an avatar. The Mustachio will be your key to enter the journey in collecting artifacts that will increase your rarity and scout level in the MustachioVerse.</p>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                            <div className="d-flex flex-row flex-md-column">
                                                <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                                    <img className="img-fluid m-auto" src={ticket} alt="Access to upcoming events" />
                                                </div>
                                                <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                                    <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Avenue to upcoming Mustachios-only events</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                            <div className="d-flex flex-row flex-md-column">
                                                <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                                    <img className="img-fluid m-auto" src={quest} alt="The Grooming Kit" />
                                                </div>
                                                <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                                    <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Join the quest on finding the 9 artifacts from The Grooming Kit</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                            <div className="d-flex flex-row flex-md-column">
                                                <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                                    <img className="img-fluid m-auto" src={mustachioToken} alt="10% Cryptoback" />
                                                </div>
                                                <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                                    <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Get 10% CRYPTOBACK in OWN Tokens</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                            <div className="d-flex flex-row flex-md-column">
                                                <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                                    <img className="img-fluid m-auto" src={book} alt="Unravel tales" />
                                                </div>
                                                <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                                    <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Discover the unique NFT tales behind each Mustachio</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                            <div className="d-flex flex-row flex-md-column">
                                                <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                                    <img className="img-fluid m-auto" src={mustachiosGroup} alt="Max supply 999" />
                                                </div>
                                                <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                                    <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Only 999 Mustachios will ever exist</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4 mustachio-links">
                                        <div className="col-12 col-md-6">
                                            <a href="https://opensea.io/collection/mustachioverse" target="_blank" rel="noreferrer" className="btn w-100 py-3 btn-custom-2 text-2xl font-w-hermann w-hermann-semibold">VIEW ON OPENSEA</a>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <a href="https://ownly.io/marketplace/?collection=the-mustachios" target="_blank" rel="noreferrer" className="btn w-100 py-3 btn-custom-2 text-2xl font-w-hermann w-hermann-semibold">VIEW ON MARKETPLACE</a>
                                        </div>
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <section id="assets" className="mb-4">
                                    <div className="row mb-4">
                                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">MustachioVerse Assets</h1>
                                            <p className="text-white text-lg font-andes">Make your Mustachios travel all across the MustachioVerse with these amazing Mustachio NFT Backgrounds.</p>
                                            <p className="text-white text-lg font-andes">Just choose the NFT background that you like and mint it now for 0.1ETH!</p>
                                            <p className="text-white text-lg font-andes">You can check them all out below.</p>
                                            <div className="app-team-link-wrap">
                                                <Link exact="true" to="/assets" className="btn app-team-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">GO TO OWNLY MARKETPLACE</Link>
                                            </div>
                                        </div>
                                        <div className="my-lg-auto col-lg-4 col-12 offset-lg-1 order-1 order-lg-2 app-assets mb-3">
                                            <img className="w-100" src={bgGIF} alt="Mustachio Backgrounds" />
                                        </div>
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <section id="collectibles" className="mb-4">
                                    <div className="row mb-4">
                                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Sages Rant Collectibles</h1>
                                            <p className="text-white text-lg font-andes">Power up your MustachioVerse experience with these amazing treasures - The Sages Rant Collectibles!</p>
                                            <p className="text-white text-lg font-andes">The Sages Rant Collectibles is a collection of single-edition, legendary pieces that can be acquired by participating in our auction happening this Q4 of 2021.</p>
                                            <p className="text-white text-lg font-andes">Holders of these backgrounds and artifacts receive distinct strengths and can boost the rarity of their Mustachios – granting magical abilities and unlimited potentials.</p>
                                            <div className="app-team-link-wrap">
                                                <a href="https://ownly.io/marketplace/?collection=the-sages-rant-collectibles" target="_blank" rel="noreferrer" className="btn app-team-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">ENTER MARKETPLACE</a>
                                            </div>
                                        </div>
                                        <div className="my-lg-auto col-lg-4 col-12 offset-lg-1 order-1 order-lg-2 app-collectibles mb-3">
                                            <img className="w-100" src={collectibles} alt="The Sages Rant Collectibles" />
                                        </div>
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <section id="roadmap" className="mb-4">
                                    <div className="row mb-4">
                                        <div className="col-lg-7 col-12">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Roadmap</h1>
                                            {/* 2021 */}
                                            <p className="text-white text-2xl font-andes-med">2021</p>
                                            
                                            <p className="text-white text-lg font-andes-med-italic mb-0">Q3</p>
                                            <ul className="app-roadmap-timeline mb-3">
                                                <li className="done">
                                                    <span className="text-white text-lg font-andes">Creation of Mustachios</span>
                                                </li>
                                                <li className="done">
                                                    <span className="text-white text-lg font-andes">Mustachio Presale (Genesis Set - 100 Mustachios)</span>
                                                </li>
                                                <li className="done">
                                                    <span className="text-white text-lg font-andes">Mustachio Official Launch</span>
                                                </li>
                                                <li className="done">
                                                    <span className="text-white text-lg font-andes">Beginning of NFT Tales (Gen. 1)</span>
                                                </li>
                                            </ul>

                                            <p className="text-white text-lg font-andes-med-italic mb-0">Q4</p>
                                            <ul className="app-roadmap-timeline mb-3">
                                                <li className="done">
                                                    <span className="text-white text-lg font-andes">OWN Token Airdrop to Mustachio Holders</span>
                                                </li>
                                                <li className="now">
                                                    <span className="text-white text-lg font-andes">Launch of The Sages Rant Collectibles</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Launch of MustachioVerse Assets</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Mustachio Presale (2nd Generation - 250 Mustachios)</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Launch of 2nd Generation Mustachios (250 Mustachios)</span>
                                                </li>
                                            </ul>

                                            {/* 2022 */}
                                            <p className="text-white text-2xl font-andes-med">2022</p>
                                        
                                            <p className="text-white text-lg font-andes-med-italic mb-0">Q1</p>
                                            <ul className="app-roadmap-timeline mb-3">
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Continuation of NFT Tales (Gen. 2)</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Make Your Own Assets</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Mustachio Events</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Launch of 3rd Generation Mustachios (250 Mustachios)</span>
                                                </li>
                                            </ul>

                                            <p className="text-white text-lg font-andes-med-italic mb-0">Q2</p>
                                            <ul className="app-roadmap-timeline mb-3">
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Continuation of NFT Tales (Gen. 3)</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Mustachio Merchandise</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Launch of 4th Generation Mustachios (399 Mustachios)</span>
                                                </li>
                                            </ul>

                                            <p className="text-white text-lg font-andes-med-italic mb-0">Q3</p>
                                            <ul className="app-roadmap-timeline mb-3">
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">Continuation of NFT Tales (Gen. 4)</span>
                                                </li>
                                                <li className="soon">
                                                    <span className="text-white text-lg font-andes">MustaSHOW (NFT Show)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <section id="team" className="mb-4">
                                    <div className="row" style={{"marginBottom": "3rem"}}>
                                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Mustachio Team</h1>
                                            <p className="text-white text-lg font-andes">The Mustachios are created by a secretive-taciturn local artist hiding under the character <a href="https://twitter.com/BoiiMustache">Boii Mustache</a>. He adopted the character Boii Mustache as his personality. The character resembles the artist himself, a long-haired guy with a nevus in his lower left eye and, of course, the legendary mustache.</p>
                                            <p className="text-white text-lg font-andes">With the idea of becoming whoever we want to be, he started creating different mustached beings, and The MustachioVerse was conceived.</p>
                                            <p className="text-white text-lg font-andes">You can check them out below.</p>
                                        </div>
                                        <div className="my-lg-auto col-lg-4 col-12 offset-lg-1 order-1 order-lg-2 boii-mustache">
                                            <img className="w-100" src={mustacheBoii} alt="Mustache Boii" style={{"borderRadius": "10px"}} />
                                        </div>
                                    </div>

                                    {/* Team of Mustachios */}
                                    <div className="row align-items-center justify-content-evenly">
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={mexico} alt="Mexico" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Mexico</h3>
                                                <p className="text-white text-lg font-andes mb-1">Ismael Jerusalem</p>
                                                <p className="text-white font-andes-italic mb-1">CEO</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={slendie} alt="SlenDie" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">SlenDie</h3>
                                                <p className="text-white text-lg font-andes mb-1">Bernard Historillo</p>
                                                <p className="text-white font-andes-italic mb-1">CTO</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={abracadoobie} alt="AbracaDoobie" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">AbracaDoobie</h3>
                                                <p className="text-white text-lg font-andes mb-1">Mark Jerly Bundalian</p>
                                                <p className="text-white font-andes-italic mb-1">Full Stack Developer</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={squarehead} alt="Squarehead" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Squarehead</h3>
                                                <p className="text-white text-lg font-andes mb-1">Shiekina Añasco</p>
                                                <p className="text-white font-andes-italic mb-1">Senior Marketing Specialist</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={ninja} alt="Ninja" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Ninja</h3>
                                                <p className="text-white text-lg font-andes mb-1">Ain Art Atos</p>
                                                <p className="text-white font-andes-italic mb-1">Marketing Specialist</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={kingstellar} alt="King Stellar" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">King Stellar</h3>
                                                <p className="text-white text-lg font-andes mb-1">Patricia Javier</p>
                                                <p className="text-white font-andes-italic mb-1">Marketing Specialist</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={sludgie} alt="Sludgie" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Sludgie</h3>
                                                <p className="text-white text-lg font-andes mb-1">Kyle Jay Naron</p>
                                                <p className="text-white font-andes-italic mb-1">Marketing Specialist</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={candyfloss} alt="Candy Floss" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Candy Floss</h3>
                                                <p className="text-white text-lg font-andes mb-1">Kendra Lopera</p>
                                                <p className="text-white font-andes-italic mb-1">Content Creator</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={grim} alt="Grim" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Grim</h3>
                                                <p className="text-white text-lg font-andes mb-1">Rico Zuñiga</p>
                                                <p className="text-white font-andes-italic mb-1">Technical Advisor</p>
                                            </div>
                                        </div>
                                        <div className="app-team-bg-wrap mb-4">
                                            <div className="app-team-bg-img mb-3">
                                                <img src={mountainwarrior} alt="Mountain Warrior" />
                                            </div>
                                            <div className="app-team-bg-desc text-center">
                                                <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Mountain Warrior</h3>
                                                <p className="text-white text-lg font-andes mb-1">Karl Vasquez</p>
                                                <p className="text-white font-andes-italic mb-1">Marketing Advisor</p>
                                            </div>
                                        </div> 
                                    </div>
                                </section>

                                <hr className="gray-line my-5" />

                                <FAQs />

                                <section id="app-contract" className="py-4">
                                    <div className="text-center">
                                        <p className="text-lg font-andes-med text-white">VERIFIED SMART CONTRACT ADDRESS:&nbsp;&nbsp;
                                            <br className="d-lg-none" />
                                            <a href="https://etherscan.io/address/0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" className="text-break text-lg font-andes">0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5</a>
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </Route>
                    <Route path="/assets" exact component={Assets} />
                    <Route path="/discord" exact component={Discord} />
                </Switch>

                <Footer />

                {/* Modal for soldout */}
                <Modal show={showSoldOut} onHide={handleCloseSoldOut} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="yellow" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-soldout-modal-content text-center font-andes text-lg"><b style={{fontSize: "1.5rem"}}>SOLD OUT!</b><br />All 100 Mustachios have gone through The Portal. Watch out for the next generation of mustached beings.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSoldOut}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 

                {/* Modal for No Metamask */}
                <Modal show={showMetamaskInstall} onHide={handleCloseMetamaskInstall} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="app-metamask-modal-img">
                            <img src={metamask} alt="Metamask logo" />
                        </div>
                        <p className="app-metamask-modal-content text-center font-andes text-lg">Metamask is currently not installed</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseMetamaskInstall}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open("https://metamask.io/download", '_blank').focus()}>
                            Install Metamask
                        </Button>
                    </Modal.Footer>
                </Modal>     

                {/* Modal for incorrect network */}
                <Modal show={showWrongNetwork} onHide={handleCloseWrongNetwork} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-network-modal-content text-center font-andes text-lg">Please connect to Rinkeby network</p>
                        {/* <p className="app-network-modal-content text-center font-andes text-lg">Please connect to Ethereum Mainnet</p> */}
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseWrongNetwork}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>    

                {/* Modal for pending transaction */}
                <Modal show={showOnProcess} onHide={handleCloseOnProcess} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <img src={loading} alt="Loading..." style={{width: "150px", margin: "0 auto"}} />
                        </div>
                        <p className="app-pending-modal-content text-center font-andes text-lg"><span className="app-loading-big-letter">O</span>, what great honour. Put on your armor and hold your fire, dear friend, for we are minting your Mustachio.</p>
                    </Modal.Body>
                </Modal>    

                {/* Modal for error transaction */}
                <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-error-modal-content text-center font-andes text-lg">Error: {txError}</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseOnError}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>    

                {/* Modal for successful transaction */}
                <Modal show={showOnSuccess} onHide={handleCloseOnSuccess} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                        </div>
                        <p className="app-success-modal-content text-center font-andes text-lg">Your Mustachio has been successfully minted! You're ready to join the quest to find the Golden Mustache.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseOnSuccess}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(explorerUrl + txHash, '_blank').focus()}>
                            View on EtherScan
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(openSeaUrl + tokenId, '_blank').focus()}>
                            View on OpenSea
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(marketplaceUrl + tokenId, '_blank').focus()}>
                            View on Marketplace
                        </Button>
                    </Modal.Footer>
                </Modal>    
            </div>
        </Router>
    )
}

export default App
