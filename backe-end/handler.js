const fs = require('fs');
const path = require('path');
const String = require('querystring');

const homePage = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'front-end', 'index.html'), (error, file) => {
    if (error) {
      alert("Error!");
    } else {
      response.writeHead(200, "Content-Type: text/html");
      response.end(file);
    }
  });
}

const frontHandler = (request, response) => {
  const extention = request.url.split(".")[request.url.split(".").length - 1];
  const fileType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpeg',
    png: 'image/png'
  };
  fs.readFile(path.join(__dirname, '..', request.url), (error, file) => {
    if (error) {
      response.writeHead(500, 'Content-Type:text/html');
      response.end("<h1>Ooops Error !!</h1>");
    } else {
      response.writeHead(200, 'Content-Type: ' + fileType[extention]);
      response.end(file);
    }
  });
}

const getResults = (dataArray, allData) => {
  var resultsArray = [];
  dataArray.forEach((item, index) => {
    if (resultsArray.length < 10) {
      if (item.toUpperCase().startsWith(allData.toUpperCase())) {
        resultsArray.push(item)
      }
    }
  });
  return resultsArray;
}

const searchHandler = (request, response) => {
  let allData = "";
  request.on('data', (data) => {
    allData += data;
  });
  request.on('end', () => {
    if (!allData)
      response.end("Empty");
    else {
      fs.readFile(path.join(__dirname, '..', 'back-end', 'ps.json'), 'utf8', (error, file) => {
        if (error) {
          response.writeHead(500, 'Content-Type:text/html');
          response.end("<h1>Ooops Error !!</h1>");
        } else {
          var dataArray = JSON.parse(file);
          var results = getResults(dataArray, allData);
          response.end(JSON.stringify(results));
        }
      });

    }
  });

}


module.exports = {
  frontHandler,
  searchHandler,
  homePage
}
