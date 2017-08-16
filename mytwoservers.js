var http = require("http");

var PORTGOOD = 7000; // all caps since they are declared as constants
var PORTMEAN = 7500;

// response for any request to locahost:7000
function handleGoodRequest(request, response){
  response.end("You look nice today");
}

// response for any request to locahost:7500
function handleMeanRequest(request, response){
  response.end("<b>Thou cockered knotty-pated serpents-egg!</b>");
  // Google the "Shakespeare Insult Generator"
}

// declare our servers
var goodServer = http.createServer(handleGoodRequest);
var meanServer = http.createServer(handleMeanRequest);


// listening on each new server
goodServer.listen(PORTGOOD, function(){
  console.log("Listening on http://localhost:%s, PORTGOOD");
})

meanServer.listen(PORTMEAN, function() {
  console.log("Listening on http://localhost:%s, PORTMEAN");
})
