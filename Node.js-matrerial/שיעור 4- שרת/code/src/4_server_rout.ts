import { createServer, IncomingMessage, ServerResponse } from 'node:http';
const HOST = "127.0.0.1";//localhost
const PORT = 3000;
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const {url, method} = req;
    if (method == "GET" && url == "/api/names") {
        res.setHeader('Content-Type', 'application/json');
        res.end(
        JSON.stringify(["Sara", "Rut", "Elisheva"])
    );
    } else if (method == "POST" && url?.startsWith("/api/books/")) {
        const urlParts = url.split("/");
        const bookId = urlParts[urlParts.length - 1];
        res.end(`Book ${bookId} added successfully`);
    } else {
        res.statusCode = 404;
        res.end("you are not in right place");
    }
});

server.listen(PORT, HOST, () => {
console.log(`Server is listening on: http://${HOST}:${PORT}`);
});
//npx ts-node ./src/7_server_rout.ts