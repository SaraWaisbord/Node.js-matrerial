import { createServer, IncomingMessage, ServerResponse } from 'node:http';
const HOST = "127.0.0.1";//localhost
const PORT = 3000;
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const {url, method} = req;
    console.log(`[${method?.padEnd(4)}] ${url}`);


    res.statusCode = 220;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: "SUCCESS", total: 1 }));
    });

server.listen(PORT, HOST, () => {
console.log(`Server is listening on: http://${HOST}:${PORT}`);
});
//npx ts-node ./src/5_server_method.ts