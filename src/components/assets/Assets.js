import './Assets.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

// Utils
import contractAssets from '../../utils/contractAssetsDev'

// Images
import grid from '../../images/grid.jpg'
import grid2 from '../../images/grid2.jpg'
import mustachioBanner from '../../images/mustachio_banner.jpeg'
import loading from '../../images/loading-mustachio.gif'


function Assets() {
    const [assets, setAssets] = useState([])

    const [showLoading, setShowLoading] = useState(false);
    const handleShowLoading = () => setShowLoading(true);
    const handleCloseLoading = () => setShowLoading(false);

    const fetchBackgrounds = async () => {
        try {
            handleShowLoading()
            var res = await axios.get(`https://ownly.tk/api/mustachioverse_assets/`)
            setAssets(res.data)
            handleCloseLoading()
        } catch (err) {
            handleCloseLoading()
            console.log(err)
        }
    }

    useEffect(() => {
        fetchBackgrounds()
    }, [])

    return (
        <div className="assets">
            <div className="container">
                <section className="bg-banner mb-5" id="assets-banner">
                    <img className="w-100 lg-banner" src={grid} alt="Mustachio Banner" />
                    <img className="w-100 xs-banner d-none" src={grid2} alt="Mustachio Banner" />
                </section>

                <section id="assets-title-desc" className="mb-4">
                    <div className="row mb-4">
                        <div className="col-lg-6 col-12">
                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The MustachioVerse Assets</h1>
                            <p className="text-white text-lg font-andes">Make your Mustachios travel all across the MustachioVerse with these amazing Mustachio NFT Backgrounds.</p>
                            <p className="text-white text-lg font-andes">Just choose the NFT background that you like and mint it now for 0.08ETH!</p>
                        </div>
                        <div className="my-lg-auto col-lg-5 col-12 offset-lg-1">
                            <img className="w-100" src={mustachioBanner} alt="Mustachio Banner" />
                        </div>
                    </div>
                </section>

                <hr className="gray-line my-5" />

                <section id="assets-collection" className="mb-4">
                    <div className="row mb-4">
                        <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Backgrounds</h1>
                        <p className="text-white text-lg font-andes">You can pick the background that you want and mint it for 0.08ETH!</p>
                        <p className="text-white text-lg font-andes">Each background can be minted up to three times.</p>
                    </div>

                    {!showLoading && (
                        <div className="row mb-4">
                            {assets.map((data, index) => ( 
                                <div className="col-12 col-md-3 mb-5" key={data.id}>
                                    <div className="assets-bg-wrap">
                                        <div className="assets-bg-img mb-3">
                                            <img src={data.thumbnail} alt={data.name} />
                                        </div>
                                        <div className="assets-bg-desc">
                                            <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">{data.name}</h3>
                                            <p className="text-white font-andes-italic">{data.supply} out of 3 minted - Multiple Edition</p>

                                            {/* <div className="assets-bg-full-desc">
                                                <p className="text-white text-lg font-andes">This is a sample content for the description. We can put at most 2 sentences.</p>
                                            </div> */}

                                            <button className="btn assets-bg-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">MINT NOW!</button>
                                        </div>
                                    </div>                            
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            {/* Modal for pending transaction */}
            <Modal show={showLoading} onHide={handleCloseLoading} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <img src={loading} alt="Loading..." style={{width: "150px", margin: "0 auto"}} />
                    </div>
                    <p className="app-pending-modal-content text-center font-andes text-lg"><span className="app-loading-big-letter">L</span>oading data. Please wait...</p>
                </Modal.Body>
            </Modal> 
        </div>
    )
}

export default Assets