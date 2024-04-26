
const {Server} = require('http');
const server = new Server();
const port = 3000;

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});