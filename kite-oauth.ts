import { KiteConnect } from "kiteconnect";

const apiKey = "mi2mqq8gcak3dprq";
const apiSecret = "5c1ncu33tlsfwnlvzoytw9d0lht3g6gn";
const requestToken = "DtdBaDsTMf4868J1aPNDwQtaPL8h9Ivq";
let access_token = "RIxCV1JDA4S8gSiS4tFT1JWzg2Ty38DJ"

const kc = new KiteConnect({ api_key: apiKey });


async function init() {
    try {
        await generateSession();
        kc.setAccessToken(access_token);
        await getProfile();
    } catch (err) {
        console.error(err);
    }
}

async function generateSession() {
    try {
        const response = await kc.generateSession(requestToken, apiSecret);
        kc.setAccessToken(response.access_token);
        console.log("Session generated:", response);
    } catch (err) {
        console.error("Error generating session:", err);
    }
}

async function getProfile() {
    try {
        const profile = await kc.getProfile();
        console.log("Profile:", profile);
        const res = await kc.placeOrder("regular", {
            exchange: "NSE",
            tradingsymbol: "HDFCBANK",
            transaction_type: "BUY",
            quantity: 1,
            product: "CNC",
            order_type: "MARKET"
        })
        console.log("Response:", res)
    } catch (err) {
        console.error("Error getting profile:", err);
    }
}
// Initialize the API calls
init();