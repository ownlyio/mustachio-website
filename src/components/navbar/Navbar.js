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
                        <Link to="#" title="Roadmap" className="text-white nav-link font-andes">ROADMAP</Link>
                        <Link to="#" title="Team" className="text-white nav-link font-andes">TEAM</Link>
                        <Link to="#" title="Roadmap" className="text-white nav-link font-andes">GALLERY</Link>
                        <Link to="#" title="Roadmap" className="text-white nav-link font-andes">NFT TALES</Link>
                        <Link to="#" title="Roadmap" className="text-white nav-link font-andes">FAQS</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar