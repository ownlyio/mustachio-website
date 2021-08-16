const connectWallet = async () => {
    // MetaMask check
    if (window.ethereum) {
        try {
            const address = await window.ethereum.enable();
            const obj = {
                status: "🦊 Connected!",
                address: address
            }

            return obj;
        } catch (error) {
            return {
                address: "",
                status: "🦊 Please connect to Metamask."
            }
        }
    } else {
        return {
            address: "",
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    } 
}

export default connectWallet