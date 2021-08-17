import { useEffect, useState } from 'react'
// import Web3 from "web3"
import './App.css'
import connectWallet  from './utils/connectWallet'
import getCurrentNetwork from './utils/getCurrentNetwork'
import getCurrentWalletConnected  from './utils/getCurrentWalletConnected'
 
function App() {
    // State variables for initialization
    const [walletAddress, setWallet] = useState("")
    const [status, setStatus] = useState("🦊 Welcome! Please connect to Metamask to proceed.")
    const [network, setNetwork] = useState("")
    const [networkId, setNetworkId] = useState(0)
    const [netStatus, setNetStatus] = useState("")

    // State variables for contract
    // const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    // const [url, setURL] = useState("")

    // Initialize wallet address and network upon button click
    const initUtils = async () => {
        const walletResponse = await connectWallet()
        const networkResponse = await getCurrentNetwork()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
        setNetworkId(networkResponse.networkID)
        setNetwork(networkResponse.network)
        setNetStatus(networkResponse.status)
    }

    // Event Listener for Metamask Account Change
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

    // Event Listener for Metamask Network Change
    const addNetworkListener = () => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', async function(networkIdMM){
                const networkResponseOnLoad = await getCurrentNetwork(1)
                setNetworkId(networkResponseOnLoad.networkID)
                setNetwork(networkResponseOnLoad.network)
                setNetStatus(networkResponseOnLoad.status)
            });
        }
    }

    // Initialize wallet address and network if Metamask is already connected
    // Watches for the listeners' update
    useEffect(() => {
        async function initUtilsOnLoad() {
            const {address, status} = await getCurrentWalletConnected();
            const {networkID, network, netStatus} = await getCurrentNetwork();
            setWallet(address)
            setStatus(status); 
            setNetworkId(networkID)
            setNetwork(network)
            setNetStatus(netStatus)
        }

        initUtilsOnLoad()
        addWalletListener()
        addNetworkListener()
    }, []);

    return (
        <div className="app text-center mt-2">
            <button className="btn btn-primary" onClick={initUtils}>
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
            <p>{network !== "" && networkId !== 0 && `Network: ${network} (ID#: ${networkId})`}</p>
            <p>{netStatus}</p>
        </div>
    )
}

export default App;
