
const { readFileSync } = require('fs');
const { Server } = require('http');
const server = new Server();
const port = 3000;

const tasks = [
  { text: 'water the flower' },
  { text: 'take out the trash' },
  { text: 'take over the world' },
];

server.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

server.addListener('request', (req, res) => {
  if (req.url.startsWith('/api/')) {
    handleAPI(req, res);
  } else if (req.url === '/') {
    res.end(readFileSync('index.html'));
  } else if (req.url === '/favicon.ico') {
    res.end(readFileSync('favicon.ico'));
  } else if (req.url === '/index.html') {
    res.end(readFileSync('index.html'));
  } else if (req.url === '/style.css') {
    res.end(readFileSync('style.css'));
  } else if (req.url === '/script.js') {
    res.end(readFileSync('script.js'));
  } else {
    res.end('404');
  }
});

function handleAPI(req, res) {
  res.end(JSON.stringify(tasks));
}
