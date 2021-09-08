import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import './Faq.css'

import Step1 from '../../images/how_to/1.PNG'
import Step2 from '../../images/how_to/2.PNG'
import Step3 from '../../images/how_to/3.PNG'
import Step4 from '../../images/how_to/4.PNG'
import Step5 from '../../images/how_to/5.PNG'
import Step6 from '../../images/how_to/6.PNG'

function FAQs() {
    const [showHowToMint2, setShowHowToMint2] = useState(false);
    const handleCloseHowToMint2 = () => setShowHowToMint2(false);
    const handleShowHowToMint2 = () => setShowHowToMint2(true);

    return (
        <section id="faqs" className="mb-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">FAQs</h1>
                    <div className="accordion accordion-flush" id="app-faqs-accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                                    What is a Mustachio?
                                </button>
                            </h2>
                            <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">The Mustachios are the first-ever NFT Tales to be told in the NFT industry. Intricately hand-drawn by the talented <b>Boii Mustache</b>, it took the artist years in the making to actualize the idea of being whatever you want to be, in a land of mustached beings.</p>
                                    <p className="text-lg font-andes">There will be a total of <b>999 Mustachios only</b>, and for each <b>generation of Mustachios</b> comes a price increase. So don’t forget to Mint your Mustachio today!</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                                    How do I get a Mustachio?
                                </button>
                            </h2>
                            <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <ol>
                                        <li className="text-lg font-andes">Visit <a href="/">mustachioverse.com</a>.</li>
                                        <li className="text-lg font-andes">Click MINT YOUR MUSTACHIO at the upper right corner.</li>
                                        <li className="text-lg font-andes">Connect your MetaMask wallet (Ethereum Network).</li>
                                        <li className="text-lg font-andes">Mint your Mustachio for only 0.3 ETH* + gas fee.</li>
                                        <li className="text-lg font-andes">Check your OpenSea account, and there you go! You now OWN a Mustachio.</li>
                                    </ol>
                                    <p className="font-andes-italic">*0.3 ETH for the first 100 Mustachios from the Genesis set.</p>
                                    <a className="text-lg font-andes" onClick={handleShowHowToMint2} style={{cursor: "pointer"}}>Click here for a more detailed instruction.</a>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                                    Do I get to pick which Mustachio I can own?
                                </button>
                            </h2>
                            <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">To add the element of surprise, you will enter the portal to MustachioVerse as a <b>random</b> Mustachio, each with a unique tale to be unraveled.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                                    Why is the gas fee so high?
                                </button>
                            </h2>
                            <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">A gas fee is required to execute transactions within the Ethereum network. If your gas fee is high, you can try to lower your gas fees in your transaction settings. The lower the gas fee, the longer it takes for the transactions to process.</p>
                                    <p className="text-lg font-andes">Here’s the Etherscan link to our previously minted Mustachios for your reference on our past transactions: <a href="https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5" target="_blank" rel="noreferrer">https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5</a></p>
                                    <p className="text-lg font-andes">You can also monitor gas prices daily as they fluctuate here: <a href="https://ethgasstation.info/index.php" target="_blank" rel="noreferrer">https://ethgasstation.info/index.php</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                                    How do I contact the Mustachio team?
                                </button>
                            </h2>
                            <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">The Mustachios created by Boii Mustache are powered by Ownly. You can email the Ownly team at <a href="mailto:support@ownly.io">support@ownly.io</a>, or send us a message in any of the following platforms:</p>
                                    <p className="text-lg font-andes">Facebook: <a href="https://web.facebook.com/mustachioverse" target="_blank" rel="noreferrer">https://web.facebook.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Instagram: <a href="https://www.instagram.com/mustachioverse" target="_blank" rel="noreferrer">https://www.instagram.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Twitter: <a href="https://twitter.com/mustachioverse" target="_blank" rel="noreferrer">https://twitter.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Discord: <a href="https://discord.gg/rfypRx4cjh" target="_blank" rel="noreferrer">https://discord.gg/rfypRx4cjh</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                                    What else can I do with my Mustachios?
                                </button>
                            </h2>
                            <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">There are so many possibilities on how you can make use of your Mustachio!</p>
                                    <p className="text-lg font-andes"><b>The Sages Rant</b> is our official NFT Tales with 10 chapters per book that reveal the stories behind the Mustachios on their quest to find the 9 valuable artifacts that are collectively called the <b>Grooming Kit.</b></p>
                                    <p className="text-lg font-andes">You can get these artifacts later with our added feature called the <b>Touch Up</b>. We will also give you the joy of changing the background of your Mustachio avatar through our <b>Unlockables</b>.</p>
                                    <p className="text-lg font-andes">We also have plans on hosting exclusive <b>Mustachios-only events</b> where Mustachios will serve as the ticket voucher for access.</p>
                                    <p className="text-lg font-andes"><b>3D Mustachio Toys</b> are also on the roster for 2022. Stay tuned!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for how to mint */}
                <Modal show={showHowToMint2} onHide={handleCloseHowToMint2} backdrop="static" keyboard={false} size="lg" centered>
                    <Modal.Header>
                        <Modal.Title>How To Mint My Mustachio?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="app-how-to-mint-modal-content font-andes-med text-lg">The following are the steps on how you can successfully mint your own Mustachios:</p>
                        
                        <hr />
                        <p className="app-how-to-mint-modal-content font-andes-med-italic text-lg">Connecting Metamask</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Minting Mustachios requires you to have a Metamask account connected to the website.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Here are the steps to connect your wallet:</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">1. Install Metamask, if you don’t have one yet. You can access this <a href="https://metamask.io/download" target="_blank" rel="noreferrer" className="app-how-to-mint-link">Link</a> to download it to your browser.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">2. Create an account on MetaMask, and Login to your MetaMask extension.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">3. Click the “MINT YOURS NOW” button on the website.</p>
                        <img className="img-fluid mb-3 w-100" src={Step1} alt="Mint Yours Now Button" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">4. Now, a window will pop out on your screen from MetaMask. Choose the account that you want to connect with our website, then click the “Next” button.</p>
                        <div className="w-2/4 mx-auto vertical-img">
                            <img className="img-fluid mb-3 w-100" src={Step2} alt="Connecting Metamask #1" />
                        </div>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">5. Click “Connect” to connect your account.</p>
                        <div className="w-2/4 mx-auto vertical-img">
                            <img className="img-fluid mb-3 w-100" src={Step3} alt="Connecting Metamask #2" />
                        </div>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Congratulations! You just connected your account to our website.</p>
                        
                        <hr />
                        <p className="app-how-to-mint-modal-content font-andes-med-italic text-lg">Minting Process</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Now that you have connected your MetaMask Account, you can now mint your own Mustachio.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Here are the steps to mint your own Mustachios:</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">1. Make sure that you are on the “Ethereum Mainnet” Network in your MetaMask.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">2. Click on the “MINT YOURS NOW” button on the website.</p>
                        <img className="img-fluid mb-3 w-100" src={Step1} alt="Mint Yours Now Button" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">3. A Pop-up window will appear on MetaMask. You can check the Gas Price and set the Gas limit there (It is up to you, if you will make it higher for priority. But we recommend sticking with the default Gas Limit).</p>
                        <div className="w-2/4 mx-auto vertical-img">
                            <img className="img-fluid mb-3 w-100" src={Step4} alt="Minting Mustachio" />
                        </div>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">4. Click “Confirm” to submit the transaction.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">5. You will now see a pop-up window (see below) that says your transaction is pending and waiting to be approved.</p>
                        <img className="img-fluid mb-3 w-100" src={Step5} alt="Pending Transaction" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">6. When the transaction is successful, you will see a pop-up window (see below) that says your Mustachio is minted.</p>
                        <img className="img-fluid mb-3 w-100" src={Step6} alt="Successfully Minted" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Congratulations! You just minted your own Mustachio! You can check it out also on OpenSea by clicking the button “View on OpenSea”, view the transaction on EtherScan by clicking the “View on EtherScan” button, and/or check it out on our Ownly Marketplace by clicking the “View on Marketplace” button.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseHowToMint2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section>
    )
}

export default FAQs