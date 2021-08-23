import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css'

// import web3 from './utils/web3'
import contract from './utils/contract'
import getCurrentNetwork from './utils/getCurrentNetwork'
import getCurrentWalletConnected  from './utils/getCurrentWalletConnected'

// Assets
import logo from './images/mustachio_logo.png'
import swordRight from './images/sword1.png'
import swordLeft from './images/sword2.png'
import mustachioLogo from './images/mustachio_logo_2.png'
import metamask from './images/metamask.png'
import videoTeaser from './videos/teaser.mp4'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
 
function App() {
    // State variables for initialization
    const [walletAddress, setWallet] = useState("")
    const [status, setStatus] = useState(0)
    const [network, setNetwork] = useState("")
    const [netStatus, setNetStatus] = useState(0)

    // State variables for minting
    const [txHash, setTxHash] = useState("")
    const [txError, setTxError] = useState("")
    const [txData, setTxData] = useState([])

    // Other Variables
    const rinkebyUrl = "https://rinkeby.etherscan.io/tx/"
    const bscScanUrl = "https://testnet.bscscan.com/tx/"
    const socMedHandles = {
        fb: "https://facebook.com/mustachioverse",
        ig: "https://instagram.com/mustachioverse",
        discord: "https://discord.gg/CYq9tmUV",
        twitter: "https://twitter.com/mustachioverse",
    }

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

                if (network !== "rinkeby") {
                // if (network !== "main") {
                    handleShowWrongNetwork()
                }
            });            
        }
    }

    // Mint
    const mintMustachio = async () => {
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
        .then(function(receipt) {
            handleCloseOnProcess()
            handleShowOnSuccess()
            setTxHash(receipt.transactionHash)
            setTxData(receipt)
        })
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
        <div className="app px-4 py-4">
            <div className="app-border">
                <img className="app-assets-left-sword" src={swordLeft} alt="Left Sword" />
                <img className="app-assets-right-sword" src={swordRight} alt="Right Sword" />
                <img className="app-assets-mustachio" src={mustachioLogo} alt="Mustachio Logo" />

                <div className="app-content px-4 py-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <div className="app-logo-wrap">
                                    <img className="app-logo" src={logo} alt="Mustachio Logo" />
                                </div>
                            </div>
                            <div className="col-6 app-title">Official launch this 09.09.21</div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.fb} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faFacebook} />
                                        </a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.ig} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faInstagram} />
                                        </a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.discord} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faDiscord} />
                                        </a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.twitter} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center mt-5">
                            <div className="col-lg-5 col-md-12">
                                <div className="app-video">
                                    <video controls controlsList="nodownload">
                                        <source src={videoTeaser} type="video/mp4" />
                                        Video tag is not supported in this browser.
                                    </video>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="app-content-main text-center">
                                    <p><span className="app-big-letter">O</span>, when the Mustachios dwell in the MustachioVerse, there is but one Mustachio who stood out among the rest.</p>
                                    <p>The Prospector, supreme beyond all Mustachiokind, who bore in his mighty hands all 9 artifacts from the fabled Grooming Kit.</p>
                                    <p>He who dared seek success and happiness through audacious exploits that moved mountains and changed the courses of the rivers.</p>
                                    <p>The Prospector.</p>
                                    <p>You'll hear more about this noble legend who brought honour to the land of mustached beings and born explorers in two ticks.</p>
                                    <p>08.24.21. Shave the date.</p>
                                    <p>Join the MustachioVerse Discord community here: <a href={socMedHandles.discord} target="_blank">{socMedHandles.discord}</a></p>
                                </div>
                                <div className="app-btn text-center">
                                    <button className="btn px-4" onClick={initUtilsAndMint}>MINT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   

            {/* Modal for No Metamask */}
            <Modal show={showMetamaskInstall} onHide={handleCloseMetamaskInstall} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="app-metamask-modal-img">
                        <img src={metamask} alt="Metamask logo" />
                    </div>
                    <p className="app-metamask-modal-content text-center">Metamask is currently not installed</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseMetamaskInstall}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => window.open("https://metamask.io/download", '_blank').focus()}>
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
                    <p className="app-network-modal-content text-center">Please connect to Rinkeby network</p>
                    {/* <p className="app-network-modal-content text-center">Please connect to Ethereum Mainnet</p> */}
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseWrongNetwork}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    

            {/* Modal for pending transaction */}
            <Modal show={showOnProcess} onHide={handleCloseOnProcess} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="gray" size="6x" icon={faSpinner} spin />
                    </div>
                    <p className="app-pending-modal-content text-center">Minting your Mustachio. Please wait...</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnProcess}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    

            {/* Modal for error transaction */}
            <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="app-error-modal-content text-center">Error: {txError}</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>    

            {/* Modal for successful transaction */}
            <Modal show={showOnSuccess} onHide={handleCloseOnSuccess} backdrop="static" keyboard={false} size="lg" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="app-success-modal-content text-center">Successfully minted your Mustachio!</p>
                    <p className="app-success-modal-content text-center">Transaction Hash: {txHash}</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnSuccess}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => window.open(rinkebyUrl + txHash, '_blank').focus()}>
                        View on EtherScan
                    </Button>
                </Modal.Footer>
            </Modal>    
        </div>
    )
}

export default App;
