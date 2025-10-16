const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.end('Hello from CI sample app');
});
server.listen(PORT, ()=> console.log(`Server listening on ${PORT}`));
module.exports = server; // makes testing easier
