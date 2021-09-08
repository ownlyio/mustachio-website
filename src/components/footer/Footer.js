import './Footer.css'
import mustachioLogo1 from '../../images/mustachio_logo_2_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const socMedHandles = {
    fb: "https://facebook.com/mustachioverse",
    ig: "https://instagram.com/mustachioverse",
    discord: "https://discord.gg/rfypRx4cjh",
    twitter: "https://twitter.com/mustachioverse",
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <hr className="footer-line" />
                <div className="row mx-0 py-5 align-items-center footer-content">
                    <div className="col-12 col-lg-4">
                        <div className="email-container">
                            <p className="text-white text-lg font-andes-med-italic mb-3">GET ON THE LIST</p>
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control font-andes" placeholder="Email Address" aria-label="Email Address" />
                                    <button className="btn btn-custom-2 font-w-hermann w-hermann-reg" type="button" id="footer-btn">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <img className="w-60" src={mustachioLogo1} alt="logo" />
                    </div>
                    <div className="text-center col-lg-4 col-sm-12 col-12">
                        <div className="d-flex justify-content-around">
                            <a href={socMedHandles.fb} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faFacebook} />
                            </a>
                            <a href={socMedHandles.ig} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faInstagram} />
                            </a>
                            <a href={socMedHandles.discord} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faDiscord} />
                            </a>
                            <a href={socMedHandles.twitter} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-last"></div>
        </footer>
    )
}

export default Footer