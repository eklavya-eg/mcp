import { KiteConnect } from "kiteconnect";

const apiKey = "mi2mqq8gcak3dprq";
const apiSecret = "5c1ncu33tlsfwnlvzoytw9d0lht3g6gn";
const requestToken = "9DWWobv4UTvgd2w2wye5tx0cLnmRGQkF";
let access_token = "RIxCV1JDA4S8gSiS4tFT1JWzg2Ty38DJ"

const kc = new KiteConnect({api_key: apiKey})

async function placeOrder(tradingsymbol: string, transaction_type: "BUY" | "SELL", quantity: number) {
// exchange: string, tradingsymbol: string, transaction_type: string, quantity: number, order_type: string, product: string
    try {
        kc.setAccessToken(access_token);
        const res = await kc.placeOrder("regular", {
            exchange: "NSE",
            tradingsymbol: tradingsymbol,
            transaction_type: transaction_type,
            quantity: quantity,
            product: "CNC",
            order_type: "MARKET"
        })
        console.log("Response:", res)
    } catch (err) {
        console.error("Error getting profile:", err);
    }
}

placeOrder("HDFCBANK", "BUY", 1);