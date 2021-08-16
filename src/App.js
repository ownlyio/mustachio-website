import { useEffect, useState } from 'react'
// import Web3 from "web3"
import './App.css'
import connectWallet  from './utils/connectWallet'
import getCurrentWalletConnected  from './utils/getCurrentWalletConnected'
 
function App() {
    //State variables
    const [walletAddress, setWallet] = useState("")
    const [status, setStatus] = useState("🦊 Welcome! Please connect to Metamask to proceed.")
    // const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    // const [url, setURL] = useState("")

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
    }

    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0])
                    setStatus("🦊 Wallet address changed!")
                } else {
                    setWallet("");
                    setStatus("🦊 Please connect to Metamask.")
                }
            })
        } else {
          setStatus("🦊 You must install Metamask into your browser: https://metamask.io/download.html");
        }
    }

    useEffect(() => {
        async function getCurrentWallet() {
            const {address, status} = await getCurrentWalletConnected();
            setWallet(address)
            setStatus(status); 
        }

        getCurrentWallet()
        addWalletListener()
    }, []);

    return (
        <div className="app text-center mt-2">
            <button className="btn btn-primary" onClick={connectWalletPressed}>
                {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                    ) : (
                    <span>Connect Wallet</span>
                )}
            </button>
            <p>{status}</p>
        </div>
    )
}

export default App;
