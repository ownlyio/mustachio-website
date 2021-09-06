import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import grid from './images/grid.jpg'
import Footer from './components/footer/Footer'
import FAQs from './components/faqs/FAQs'
 
function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="app-content">
                    <div className="container">
                        <section className="app-banner" id="app-banner">
                            <img className="w-100" src={grid} alt="Mustachio Banner" />
                        </section>
                        <section id="app-welcome" className="py-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-montreux-csdmbditalic">Welcome to The Mustachios!</h1>
                                    <p className="text-white font-montreux-cs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pharetra eros, nec tempus neque. Etiam consequat nisi risus, a rhoncus magna gravida quis. Integer sit amet lorem neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus dignissim a justo ac varius. Donec mauris urna, volutpat at lectus id, faucibus euismod felis. Sed placerat felis et luctus sodales.</p>
                                </div>
                                <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                                    <img className="w-100" src="https://via.placeholder.com/768" alt="Mustachio Image #1" />
                                </div>
                            </div>
                        </section>

                        <section id="app-mint" className="mb-4">
                            <div className="row p-4 m-auto">
                                <div className="m-auto col-lg-3 col-12">
                                    <h3 className="font-montreux-csdmbditalic text-white text-center">MINT YOUR MUSTACHIO</h3>
                                </div>
                                <div className="m-auto col-lg-4 col-12 offset-lg-1">
                                    <p className="text-justify font-montreux-cs text-white mb-lg-0">Curabitur magna velit, mattis ut maximus non, vehicula vitae elit. Integer non metus mauris.</p>
                                </div>
                                <div className="m-auto col-lg-3 col-12 offset-lg-1">
                                    <button id="app-mint-button" className="btn w-100 py-3 btn-custom-1 text-2xl font-w-hermann w-hermann-semibold" type="button">MINT YOURS NOW!</button>
                                    <button className="btn text-center mt-2 w-100 font-montreux-csth text-sm text-white how">How to mint?</button>
                                </div>
                            </div>
                        </section>
                        
                        <hr className="gray-line my-5" />

                        <section id="app-desc" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-montreux-csdmbditalic">Description Here</h1>
                                    <p className="text-white font-montreux-cs">Praesent porta quam id purus maximus lobortis id sit amet nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed erat nisl, vulputate sit amet eros eu, mollis ultricies quam.</p>
                                    <p className="text-white font-montreux-cs">Sed laoreet elit eu sapien porttitor, hendrerit vulputate enim elementum. Vivamus maximus gravida augue, ac maximus libero viverra in. <Link to="#">Suspendisse potenti.</Link> Cras vehicula quam ut sagittis viverra.</p>
                                    <p className="text-white font-montreux-cs">Duis diam odio, <Link to="#">luctus quis nisi ut,</Link> hendrerit lacinia elit. Integer non mi sed libero iaculis tempor vitae aliquam orci.</p>
                                </div>
                                <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                                    <img className="w-100" src="https://via.placeholder.com/768" alt="Mustachio Image #1" />
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="app-specs" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-9 col-12">
                                    <h1 className="mb-4 text-white font-montreux-csdmbditalic">Why Mint our Mustachios?</h1>
                                    <p className="text-white font-montreux-cs">When you mint a Mustachio, you’re not simply buying an avatar. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean auctor turpis sed fringilla faucibus. Praesent scelerisque pharetra libero, ut commodo augue congue in. Cras sed dui lacus. </p>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="mx-auto col-md-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-3">
                                        <img className="img-fluid m-auto" src="https://via.placeholder.com/100x150" alt="Reason #1" />
                                    </div>
                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-montreux-cs">Quisque rutrum elit sit amet rhoncus rutrum</p>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-3">
                                        <img className="img-fluid m-auto" src="https://via.placeholder.com/100x150" alt="Reason #1" />
                                    </div>
                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-montreux-cs">Nam ipsum mi, blandit in nibh vel</p>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-3">
                                        <img className="img-fluid m-auto" src="https://via.placeholder.com/100x150" alt="Reason #1" />
                                    </div>
                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-montreux-cs">Ut consectetur eleifend congue, quisque vel lorem quis metus eleifend faucibus.</p>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-3">
                                        <img className="img-fluid m-auto" src="https://via.placeholder.com/100x150" alt="Reason #1" />
                                    </div>
                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-montreux-cs">Nulla egestas, felis sed imperdiet interdum ipsum felis curabitur</p>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-2 col-12">
                                    <div className="d-flex m-auto align-items-md-center col-md-12 col-3">
                                        <img className="img-fluid m-auto" src="https://via.placeholder.com/100x150" alt="Reason #1" />
                                    </div>
                                    <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                        <p className="text-white mt-3 mb-0 text-center font-montreux-cs">Morbi vitae arcu a lectus rutrum consectetur sit amet eget felis curabitur vel iaculis nulla</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="app-roadmap" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-montreux-csdmbditalic">Roadmap</h1>
                                    <ul className="app-roadmap-timeline">
                                        <li className="done">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="done">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="done">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="done">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="done">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="now">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white font-montreux-cs">Mauris pretium sagittis odio nec lacinia.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="app-team" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-montreux-csdmbditalic">The Team</h1>
                                    <p className="text-white font-montreux-cs">Praesent porta quam id purus maximus lobortis id sit amet nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed erat nisl, vulputate sit amet eros eu, mollis ultricies quam.</p>
                                    <p className="text-white font-montreux-cs mb-4">Sed laoreet elit eu sapien porttitor, hendrerit vulputate enim elementum. Vivamus maximus gravida augue, ac maximus libero viverra in. Suspendisse potenti. Cras vehicula quam ut sagittis viverra.</p>
                                    <a href="https://ownly.io/#team" target="_blank" className="btn app-team-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">GO TO TEAM</a>
                                </div>
                                <div className="my-lg-auto col-lg-4 col-12 offset-lg-1">
                                    <img className="w-100" src="https://via.placeholder.com/768" alt="Mustachio Image #1" />
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <FAQs />

                        <section id="app-contract" className="py-4">
                            <div className="text-center">
                                <p className="font-montreux-csdmbd text-white">VERIFIED SMART CONTRACT ADDRESS:&nbsp;&nbsp;
                                    <br className="d-lg-none" />
                                    <a href="https://etherscan.io/address/0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" className="text-break font-montreux-cs">0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5</a>
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
