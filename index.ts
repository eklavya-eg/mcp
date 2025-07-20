import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
    name: "zerodha",
    version: "1.0.0"
})

// add
server.tool("add", {
    title: "Adding Tool",
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() }
},
    async ({ a, b }) => ({
        content: [{ type: "text", text: String(a + b) }]
    })
);

// factorial
server.tool("factorial", {
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

const transport = new StdioServerTransport();
await server.connect(transport)