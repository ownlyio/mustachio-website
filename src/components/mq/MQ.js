import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './MQ.css'

import mqbanner from '../../images/mq_banner.jpg'
import mqbannertab from '../../images/mq_banner_tab.jpg'

function MQ() {
    const [emailAdd, setEmailAdd] = useState("")
    const [width, setWidth] = useState(0)
    const [showSubscribed, setShowSubscribed] = useState(false);
    const handleCloseSubscribed = () => setShowSubscribed(false);
    const handleShowSubscribed = () => setShowSubscribed(true);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const handleCloseErrorEmail = () => setShowErrorEmail(false);
    const handleShowErrorEmail = () => setShowErrorEmail(true);

    const submitForm = (e) => {
        e.preventDefault()

        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    
        if (re.test(emailAdd)) {
            axios.post('https://ownly.tk/api/store-mustachio-subscriber', {email_address: emailAdd}).then(res => {
                document.getElementById("emailAdd").value = ""
                setEmailAdd("")
                handleShowSubscribed()
            })
        } else {
            handleShowErrorEmail()
        }
    }

    const getBG = devWidth => {
        if (devWidth > 991) return {"backgroundImage": `url('${mqbanner}')`, "backgroundSize": "cover", "backgroundPosition": "center center"}
        return {"backgroundImage": `url('${mqbannertab}')`, "backgroundSize": "cover", "backgroundPosition": "center center"}
    }

    useEffect(() => {
        setWidth(window.innerWidth)

        // for debug purposes
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
    },[])

    return (
        <>
            <section id="mq" style={getBG(width)}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 mq-row">
                            <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold text-6xl">Mustachio Quest</h1>
                            <p className="text-white text-2xl font-andes mb-5">Upcoming <a href="https://ownly.io/bbb-p2e" target="_blank" rel="noreferrer">Play-to-Earn Game</a>. Stashing Soon...</p>
                            <p className="text-white text-3xl font-andes">BE THE FIRST TO KNOW</p>
                            <form onSubmit={submitForm}>
                                <div className="input-group">
                                    <input type="email" name="emailAdd" id="emailAdd" className="form-control font-andes text-xl" placeholder="Email Address" aria-label="Enter Your Email Address here" onChange={(e) => setEmailAdd(e.target.value)} />
                                    <button className="btn btn-custom-2 font-w-hermann w-hermann-reg text-2xl" type="submit" id="footer-btn">SUBSCRIBE</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-7 col-12">
                            <a href="https://ownly.io/bbb-p2e" className="d-block h-100" target="_blank" rel="noreferrer"></a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Modal for successful subscription */}
            <Modal show={showSubscribed} onHide={handleCloseSubscribed} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="text-center font-andes text-lg">Thank you for subscribing!</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSubscribed}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 

            {/* Modal for error in email */}
            <Modal show={showErrorEmail} onHide={handleCloseErrorEmail} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="text-center font-andes text-lg">Please provide a valid email address and try again.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseErrorEmail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 
        </>
    )
}

export default MQ