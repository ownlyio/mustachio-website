import './Assets.css'

// Utils
import contractBg from '../../utils/contractBackgroundsDev'

// Images
import grid from '../../images/grid.jpg'
import grid2 from '../../images/grid2.jpg'
import mustachioBanner from '../../images/mustachio_banner.jpeg'

function Backgrounds() {
    return (
        <div className="bg">
            <div className="container">
                <section className="bg-banner mb-5" id="bg-banner">
                    <img className="w-100 lg-banner" src={grid} alt="Mustachio Banner" />
                    <img className="w-100 xs-banner d-none" src={grid2} alt="Mustachio Banner" />
                </section>

                <section id="bg-title-desc" className="mb-4">
                    <div className="row mb-4">
                        <div className="col-lg-6 col-12">
                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Mustachio Backgrounds</h1>
                            <p className="text-white text-lg font-andes">Make your Mustachios travel all across the MustachioVerse with these amazing Mustachio NFT Backgrounds.</p>
                            <p className="text-white text-lg font-andes">Just choose the NFT background that you like and mint it now for 0.1ETH!</p>
                        </div>
                        <div className="my-lg-auto col-lg-5 col-12 offset-lg-1">
                            <img className="w-100" src={mustachioBanner} alt="Mustachio Banner" />
                        </div>
                    </div>
                </section>

                <hr className="gray-line my-5" />

                <section id="bg-collection" className="mb-4">
                    <div className="row mb-4">
                        <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Backgrounds</h1>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Backgrounds