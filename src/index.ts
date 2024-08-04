import { writeFileSync } from "fs"
import http, { IncomingMessage, ServerResponse } from 'http';

console.log("[BTest] Hello World !")
writeFileSync('/bhome/hello.txt', "Hello World !")


const PORT = 3000;

const requestListener = (req: IncomingMessage, res: ServerResponse): void => {
  console.log("[BTest] Incoming request : " + req.method + " " + req.url);

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World !');
  } else if (req.method === 'GET' && req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Pong !');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`[BTest] Server is running on port ${PORT}`);
});
