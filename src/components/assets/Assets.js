import './Assets.css'

// Utils
import contractBg from '../../utils/contractBackgroundsDev'

// Images
import grid from '../../images/grid.jpg'
import grid2 from '../../images/grid2.jpg'
import mustachioBanner from '../../images/mustachio_banner.jpeg'

function Assets() {
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

                    <div className="row mb-4">
                        <div className="col-12 col-md-4 mb-5">
                            <div className="assets-bg-wrap">
                                <div className="assets-bg-img mb-3">
                                    <img src="https://gateway.pinata.cloud/ipfs/QmZGT33XvkXhwY5guEwNXWWxrPS9peKHC29XY13waTAJRD" alt="BG" />
                                    {/* <img src="https://picsum.photos/490/711" alt="BG" /> */}
                                </div>
                                <div className="assets-bg-desc">
                                    <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Abracadoobie Magic Land</h3>
                                    <p className="text-white font-andes-italic">0 out of 3 minted - Multiple Edition</p>

                                    <div className="assets-bg-full-desc">
                                        <p className="text-white text-lg font-andes">This is a sample content for the description. We can put at most 2 sentences.</p>
                                    </div>

                                    <button className="btn assets-bg-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">MINT NOW!</button>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-12 col-md-4 mb-5">
                            <div className="assets-bg-wrap">
                                <div className="assets-bg-img mb-3">
                                    <img src="https://gateway.pinata.cloud/ipfs/QmQLeTb4kYZLcnWPJyoEZN1WuDfVJxEJG7jkDCQTZ9itXx" alt="BG" />
                                    {/* <img src="https://picsum.photos/490/711" alt="BG" /> */}
                                </div>
                                <div className="assets-bg-desc">
                                    <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Aster Comets</h3>
                                    <p className="text-white font-andes-italic">0 out of 3 minted - Multiple Edition</p>

                                    <div className="assets-bg-full-desc">
                                        <p className="text-white text-lg font-andes">This is a sample content for the description. We can put at most 2 sentences.</p>
                                    </div>

                                    <button className="btn assets-bg-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">MINT NOW!</button>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-12 col-md-4 mb-5">
                            <div className="assets-bg-wrap">
                                <div className="assets-bg-img mb-3">
                                    <img src="https://gateway.pinata.cloud/ipfs/QmV8anSyYK42mZEwYEnMYPbBD4bu5XPpUVJRAD3wMwd361" alt="BG" />
                                    {/* <img src="https://picsum.photos/490/711" alt="BG" /> */}
                                </div>
                                <div className="assets-bg-desc">
                                    <h3 className="text-white font-w-hermann w-hermann-semibold mb-1">Breakfast Kingdom</h3>
                                    <p className="text-white font-andes-italic">0 out of 3 minted - Multiple Edition</p>

                                    <div className="assets-bg-full-desc">
                                        <p className="text-white text-lg font-andes">This is a sample content for the description. We can put at most 2 sentences.</p>
                                    </div>

                                    <button className="btn assets-bg-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">MINT NOW!</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Assets