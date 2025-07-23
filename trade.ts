import { KiteConnect } from "kiteconnect";

const apiKey = "mi2mqq8gcak3dprq";
const apiSecret = "5c1ncu33tlsfwnlvzoytw9d0lht3g6gn";
const requestToken = "9DWWobv4UTvgd2w2wye5tx0cLnmRGQkF";
const access_token = "oopw3TuuO5a0WvH9HGNAD8Q2YqM1HEyq"

const kc = new KiteConnect({api_key: apiKey})

console.log(kc.getLoginURL())
export async function placeOrder(tradingsymbol: string, transaction_type: "BUY" | "SELL", quantity: number) {
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
        return res
    } catch (err) {
        return err
    }
}

console.log(await placeOrder("HDFCBANK", "BUY", 1));