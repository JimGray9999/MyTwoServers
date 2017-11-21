const http = require("http");

const PORTGOOD = 7000; // all caps since they are declared as constants
const PORTMEAN = 7500;

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
const goodServer = http.createServer(handleGoodRequest);
const meanServer = http.createServer(handleMeanRequest);


// listening on each new server
goodServer.listen(PORTGOOD, function(){
  console.log("Listening on http://localhost:%s, PORTGOOD");
})

meanServer.listen(PORTMEAN, function() {
  console.log("Listening on http://localhost:%s, PORTMEAN");
})
