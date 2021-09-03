import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import grid from './images/grid.jpg'
import Footer from './components/footer/Footer'
 
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
                                </div>
                            </div>
                        </section>
                        <section id="app-contract" className="py-4">
                            <div className="text-center">
                                <p className="font-montreux-csdmbd text-white">VERIFIED SMART CONTRACT ADDRESS: 
                                    <Link to="https://etherscan.io/address/0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" className="font-montreux-cs">0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5</Link>
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
