import Web3 from "web3"

const getCurrentNetwork = async () => {
    if (window.ethereum) {
        try {
            let network = ""
            const web3 = new Web3(Web3.givenProvider)
            const networkID = await web3.eth.net.getId()

            switch (networkID) {
                case 1:
                    network = "main"
                    break
                case 3:
                    network = "ropsten"
                    break
                case 42:
                    network = "kovan"
                    break
                case 4:
                    network = "rinkeby"
                    break
                case 5:
                    network = "goerly"
                    break
                case 97:
                    network = "bsctestnet"
                    break
                case 56:
                    network = "bscmainnet"
                    break
                default:
                    break
            }

            console.log("Network on util: " + network)
            
            return {
                networkID,
                network,
                status: "🦊 Please connect to Metamask."
            }
        } catch (err) {
            return {
                networkID: 0,
                network: "",
                status: "🦊 Please connect to Metamask."
            }
        }
    } else {
        return {
            networkID: 0,
            network: "",
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    }
};

export default getCurrentNetwork