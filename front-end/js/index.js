function fetch(url, searchValue, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
          callback(JSON.parse(xhr.responseText));
      } else {
        alert("Error !!, on: "+url+" with response: "+error);
      }
    }
  }
  xhr.open("POST", url, true);
  xhr.send(searchValue);
}
