import { createServer, IncomingMessage, ServerResponse } from 'node:http';
const HOST = "127.0.0.1";//localhost
const PORT = 3000;
const server = createServer((req: IncomingMessage, res:ServerResponse) => {
    console.log("we in the hear");
    res.end("you find me!")
});

server.listen(PORT, HOST, () => {
console.log(`Server is listening on: http://${HOST}:${PORT}`);
});