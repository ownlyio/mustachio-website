import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import FAQs from './components/faqs/FAQs'

import grid from './images/grid.jpg'
import grid2 from './images/grid2.jpg'
import mustachioBanner from './images/mustachio_banner.jpeg'
import prospector from './images/prospector.jpg'
import cryptoback from './images/10_cryptoback.jpg'
import story from './images/story.jpg'
import mustachioGold from './images/mustachio_gold.png'
import mustachioLogo from './images/mustachio_logo_no_text.png'
import mustachios from './images/3_mustachios.png'
 
function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
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
                                    <p className="text-white font-andes">With his mighty pen and a slight quiver on his shoulders, Boii Mustache have yet created another masterpiece... in the form of The Mustachios, the first-ever NFT Tales before our eyes, so we can transport as Mustachios to this mysterious island concealed on earth - the MustachioVerse.</p>
                                    <p className="text-white font-andes">Together, let's open The Sages Rant and read our story  of how we triumphed over the 99 other Mustachios in our quest to find The Golden Mustache, and how we became the mustached hero.</p>
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
                                    <p className="text-justify font-andes text-white mb-lg-0">You can mint your OWN mustachio, and let's unfold the story behind each mustache</p>
                                </div>
                                <div className="m-auto col-lg-3 col-12 offset-lg-1">
                                    <button id="app-mint-button" className="btn w-100 py-3 btn-custom-1 text-2xl font-w-hermann w-hermann-semibold" type="button">MINT YOURS NOW!</button>
                                    <button className="btn text-center mt-2 w-100 font-andes-xlight text-sm text-white how">How to mint?</button>
                                </div>
                            </div>
                        </section>
                        
                        <hr className="gray-line my-5" />

                        <section id="tales" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Tale of the Prospector</h1>
                                    <p className="text-white font-andes">O, when the Mustachios dwell in the MustachioVerse, there is but one Mustachio who stood out among the rest.</p>
                                    <p className="text-white font-andes">The Prospector, supreme beyond all MustachioKind, who bore in his mighty hands all 9 artifacts from the fabled Grooming Kit.</p>
                                    <p className="text-white font-andes">He who dared seek success and happiness through audacious exploits that moved mountains and changed the courses of the rivers.</p>
                                    <p className="text-white font-andes">The Prospector.</p>
                                    <p className="text-white font-andes">You'll hear more about this noble legend who brought honour to the land of mustached beings and born explorers in two ticks.</p>
                                    <div className="app-tales-link-wrap">
                                        <a href="#" target="_blank" className="btn app-tales-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">ENTER THE MUSTACHIOVERSE</a>
                                    </div>
                                </div>
                                <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                                    <img className="w-100" src={prospector} alt="Prospector" />
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="app-specs" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Why Mint our Mustachios?</h1>
                                    <p className="text-white font-andes">When you mint a Mustachio, you’re not simply buying an avatar. The Mustachio will be your key to enter the journey in collecting artifacts that will increase your rarity and scout level in the MustachioVerse.</p>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-sm-5 col-6">
                                        <img className="img-fluid m-auto" src={mustachioLogo} alt="Access to upcoming events" />
                                    </div>
                                    <div className="m-auto col-md-12 col-sm-6 col-5 offset-md-0 offset-sm-1 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-andes">Access to upcoming Mustachio Events - Mustachio serves as a ticket voucher for future events</p>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-sm-5 col-6">
                                        <img className="img-fluid m-auto" src={mustachioGold} alt="The Grooming Kit" />
                                    </div>
                                    <div className="m-auto col-md-12 col-sm-6 col-5 offset-md-0 offset-sm-1 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-andes">Join the quest to find the 9 artifacts from The Grooming Kit</p>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-sm-5 col-6">
                                        <img className="img-fluid m-auto" src={cryptoback} alt="10% Cryptoback" />
                                    </div>
                                    <div className="m-auto col-md-12 col-sm-6 col-5 offset-md-0 offset-sm-1 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-andes">10% Cryptoback in $OWN Tokens</p>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-sm-5 col-6">
                                        <img className="img-fluid m-auto" src={story} alt="Unravel tales" />
                                    </div>
                                    <div className="m-auto col-md-12 col-sm-6 col-5 offset-md-0 offset-sm-1 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-andes">Unravel the unique tales behind each Mustachio</p>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-sm-5 col-6">
                                        <img className="img-fluid m-auto" src={mustachios} alt="Max supply 999" />
                                    </div>
                                    <div className="m-auto col-md-12 col-sm-6 col-5 offset-md-0 offset-sm-1 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-andes">Max supply of 999 Mustachios</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="roadmap" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Roadmap</h1>
                                    <ul className="app-roadmap-timeline">
                                        <li className="done">
                                            <span className="text-white font-andes"><b>August 2021:</b> Presale of 100 Genesis Set</span>
                                        </li>
                                        <li className="now">
                                            <span className="text-white font-andes"><b>September 2021:</b> Official Launch</span>
                                        </li>
                                        <li className="now">
                                            <span className="text-white font-andes"><b>September 2021:</b> OWN Airdrop to Mustachio Holders</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white font-andes"><b>October 2021:</b> Launch of Next Batch of Mustachios</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white font-andes"><b>November 2021:</b> OWN Airdrop to Mustachio Holders</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white font-andes"><b>December 2021:</b> OWN Airdrop to Mustachio Holders</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="team" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Mustachio Team</h1>
                                    <p className="text-white font-andes">The Mustachios are created by our local artist, <a href="https://twitter.com/BoiiMustache">Dan Barotilla</a>. The MustachioVerse are so glad to have the Ownly Team for this project. You can check them out below.</p>
                                    <div className="app-team-link-wrap">
                                        <a href="https://ownly.io/#team" target="_blank" className="btn app-team-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">CHECK IT OUT HERE!</a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <FAQs />

                        <section id="app-contract" className="py-4">
                            <div className="text-center">
                                <p className="font-andes-med text-white">VERIFIED SMART CONTRACT ADDRESS:&nbsp;&nbsp;
                                    <br className="d-lg-none" />
                                    <a href="https://etherscan.io/address/0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" className="text-break font-andes">0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
