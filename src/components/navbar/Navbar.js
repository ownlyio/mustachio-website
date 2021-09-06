import { Link } from "react-router-dom"
import mustachioLogo from '../../images/mustachio_logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-md bg-color-1 navbar-light sticky-top">
            <div class="container">
                <Link exact to="/" id="mustachio-brand" className="navbar-brand">
                    <img src={mustachioLogo} className="d-inline-block align-top" alt="Mustachio Logo" height="65px" width="auto" />
                </Link>
                <div className="navbar-links">
                    <div className="navbar-nav" id="nav-bar">
                        <a href="#app-roadmap" title="Roadmap" className="text-white nav-link font-andes">ROADMAP</a>
                        <a href="#app-team" title="Team" className="text-white nav-link font-andes">TEAM</a>
                        <a href="#" title="Gallery" className="text-white nav-link font-andes">GALLERY</a>
                        <a href="#" title="NFT Tales" className="text-white nav-link font-andes">NFT TALES</a>
                        <a href="#" title="FAQs" className="text-white nav-link font-andes">FAQS</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar