import web3 from './web3'

const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await web3.eth.getAccounts()
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "🦊 Connected!",
                }
            } else {
                return {
                    address: "",
                    status: "🦊 Please connect to Metamask.",
                }
            }
        } catch (err) {
            return {
                connectedStatus: false,
                address: "",
                status: "🦊 Please connect to Metamask."
            }
        }
    } else {
        return {
            connectedStatus: false,
            address: "",
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    }
};

export default getCurrentWalletConnected