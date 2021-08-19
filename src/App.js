import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './App.css'

// import web3 from './utils/web3'
import contract from './utils/contract'
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

    // State variables for minting
    const [isHashed, setIsHashed] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [txHash, setTxHash] = useState("")
    const [txError, setTxError] = useState("")
    const [txData, setTxData] = useState([])

    // Other Variables
    const rinkebyUrl = "https://rinkeby.etherscan.io/tx/"
    const bscScanUrl = "https://testnet.bscscan.com/tx/"

    // Initialize wallet address and network upon button click
    const initUtils = async () => {
        const walletResponse = await connectWallet()
        const networkResponse = await getCurrentNetwork()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
        setNetworkId(networkResponse.networkID)
        setNetwork(networkResponse.network)
        setNetStatus(networkResponse.netStatus)
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
                setNetStatus(networkResponseOnLoad.netStatus)
            });
        }
    }

    // Mint
    const mintMustachio = async () => {
        const mintPrice = await contract.methods.getMintPrice().call()
        await contract.methods.createToken().send({
            from: walletAddress,
            value: mintPrice,
            type: '0x2',
        })
        .on('transactionHash', function(hash){
            setIsHashed(true)
        })
        .on('error', function(error) {
            setIsHashed(false)
            setTxError(error.message)
        })
        .then(function(receipt) {
            setIsHashed(false)
            setIsSuccess(true)
            setTxHash(receipt.transactionHash)
            setTxData(receipt)
        })
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
            <Button variant="primary" onClick={initUtils}>
                {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                    ) : (
                    <span>Connect Wallet</span>
                )}
            </Button>
            <p>{status}</p>
            <p>{network !== "" && networkId !== 0 && `Network: ${network} (ID#: ${networkId})`}</p>
            <p>{netStatus}</p>

            {/* change to bscmainnet if deployed */}
            {/* {network !== "bsctestnet" ? (
                    <Button variant="primary" className="text-center mt-4" disabled>Please connect to Binance Smart Chain Network (Testnet)</Button>
                ) : (
                    <Button variant="primary" className="text-center mt-4" onClick={mintMustachio}>Get My Mustachio</Button>
                )
            } */}
            {network !== "rinkeby" ? (
                    <Button variant="primary" className="text-center mt-4" disabled>Please connect to Rinkeby</Button>
                ) : (
                    <Button variant="primary" className="text-center mt-4" onClick={mintMustachio}>Get My Mustachio</Button>
                )
            }
            {isHashed && (
                <p>Minting your token. Please wait...</p>
            )}
            {txError !== "" && (
                <p>{txError}</p>
            )}
            {isSuccess && (
                <p>Minting success! Check the transaction <a href={rinkebyUrl + txHash}>here.</a></p>
                // <p>Minting success! Check the transaction <a href={bscScanUrl + txHash}>here.</a></p>
            )}
        </div>
    )
}

export default App;
