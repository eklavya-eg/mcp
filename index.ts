import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { placeOrder } from "./trade";

const server = new McpServer({
    name: "zerodha",
    version: "1.0.0"
})

// add
server.tool("addition-of-two-numbers", {
    title: "Adding Tool",
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() }
},
    async ({ a, b }) => ({
        content: [{ type: "text", text: String(a + b) }]
    })
);

// factorial
server.tool("factorial-of-a-number", {
    title: "Factorial Tool",
    description: "Factorial of a number",
    inputSchema: { a: z.number() }
},
    async ({ a }) => ({
        content: [{
            type: "text", text: String(() => {
                let ans = 1;
                while (a > 0) {
                    ans *= a;
                    a -= 1;
                }
                return String(ans);
            })
        }]
    })
);

// buy stock
server.tool("buy-a-stock", {
    title: "Buy Stock",
    description: "buy a stock by inputting Stock name and quantity",
    inputSchema: { tradingsymbol: z.string(), quantity: z.number() }
},
    async ({ tradingsymbol, quantity }) => ({
        content: [{
            type: "text", text: String(async () => {
                const res = await placeOrder(tradingsymbol, "BUY", quantity);
                return res;
            })
        }]
    })
);

// sell stock
server.tool("sell-a-stock", {
    title: "Sell Stock",
    description: "sell a stock by inputting Stock name and quantity",
    inputSchema: { tradingsymbol: z.string(), quantity: z.number() }
},
    async ({ tradingsymbol, quantity }) => ({
        content: [{
            type: "text", text: String(async () => {
                const res = await placeOrder(tradingsymbol, "SELL", quantity);
                return res;
            })
        }]
    })
);

// buy option
server.tool("buy-a-stock", {
    title: "Buy Stock",
    description: "buy a stock by inputting Stock name and quantity",
    inputSchema: { tradingsymbol: z.string(), quantity: z.number() }
},
    async ({ tradingsymbol, quantity }) => ({
        content: [{
            type: "text", text: String(async () => {
                const res = await placeOrder(tradingsymbol, "BUY", quantity);
                return res;
            })
        }]
    })
);

// sell option
server.tool("sell-a-stock", {
    title: "Sell Stock",
    description: "sell a stock by inputting Stock name and quantity",
    inputSchema: { tradingsymbol: z.string(), quantity: z.number() }
},
    async ({ tradingsymbol, quantity }) => ({
        content: [{
            type: "text", text: String(async () => {
                const res = await placeOrder(tradingsymbol, "SELL", quantity);
                return res;
            })
        }]
    })
);

const transport = new StdioServerTransport();
await server.connect(transport)