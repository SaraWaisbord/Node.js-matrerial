import { createServer, IncomingMessage, ServerResponse } from 'node:http';
const HOST = "127.0.0.1";//localhost
const PORT = 3000;
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const {url, method} = req;
    console.log(`[${method?.padEnd(4)}] ${url}`);
    let body = "";
    req.on("data", (chunk: string) => {
        console.log("chank");
        body += chunk;
    });
    req.on("error", (err: Error) => {
        console.log(`Failed getting request body: ${err}`);
    });
    req.on("end", () => {
        console.log(`Request body: ${body}`);
        res.end("we got your message");
    });
});

server.listen(PORT, HOST, () => {
console.log(`Server is listening on: http://${HOST}:${PORT}`);
});