import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { bubble as Menu } from "react-burger-menu"
import mustachioLogo from '../../images/mustachio_logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    const [menuOpenState, setMenuOpenState] = useState(false)

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const handleStateChange = (state) => {
        setMenuOpenState(state.isOpen)
    }

    const closeMenu = () => {
        setMenuOpenState(false)
    }

    const styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            right: '36px',
            top: '30px'
        },
        bmBurgerBars: {
            background: '#fff'
        },
        bmBurgerBarsHover: {
            background: '#bdc3c7'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#fff'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            left: 0
        }
    } 

    return (
        <nav id="nav" class="navbar navbar-expand-md bg-color-1 navbar-light sticky-top">
            <div class="container">
                <Link exact to="/" id="mustachio-brand" className="navbar-brand">
                    <img src={mustachioLogo} className="d-inline-block align-top" alt="Mustachio Logo" height="65px" width="auto" />
                </Link>
                <div className="navbar-links d-none d-md-block">
                    <div className="navbar-nav" id="nav-bar">
                        <HashLink smooth to="#tales" scroll={el => scrollWithOffset(el)} title="NFT Tales" className="text-white nav-link font-andes">NFT TALES</HashLink>
                        <HashLink smooth to="#roadmap" scroll={el => scrollWithOffset(el)} title="Roadmap" className="text-white nav-link font-andes">ROADMAP</HashLink>
                        {/* <HashLink smooth to="#" scroll={el => scrollWithOffset(el)} title="Gallery" className="text-white nav-link font-andes">GALLERY</HashLink> */}
                        <HashLink smooth to="#team" scroll={el => scrollWithOffset(el)} title="Team" className="text-white nav-link font-andes">TEAM</HashLink>
                        <HashLink smooth to="#faqs" scroll={el => scrollWithOffset(el)} title="FAQs" className="text-white nav-link font-andes">FAQS</HashLink>
                    </div>
                </div>
                <div id="outer-container" className="d-md-none align-self-end">
                    <Menu right styles={styles}
                        isOpen={menuOpenState}
                        onStateChange={(state) => handleStateChange(state)}
                    >
                        <HashLink smooth to="#tales" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} title="NFT Tales" className="text-white d-block py-3 w-100 text-decoration-none font-andes">NFT TALES</HashLink>
                        <HashLink smooth to="#roadmap" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} title="Roadmap" className="text-white d-block py-3 w-100 text-decoration-none font-andes">ROADMAP</HashLink>
                        {/* <HashLink smooth to="#" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} title="Gallery" className="text-white d-block py-3 w-100 text-decoration-none font-andes">GALLERY</HashLink> */}
                        <HashLink smooth to="#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} title="Team" className="text-white d-block py-3 w-100 text-decoration-none font-andes">TEAM</HashLink>
                        <HashLink smooth to="#faqs" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} title="FAQs" className="text-white d-block py-3 w-100 text-decoration-none font-andes">FAQS</HashLink>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default Navbar