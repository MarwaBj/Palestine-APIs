const http = require('http');
const router = require('./router.js');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

const server = http.createServer(router);
server.listen(port, (error) =>{
  console.log('Server is running on port: ' + port);
});


module.exports = server;
