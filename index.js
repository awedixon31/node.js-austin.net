// var url = require('url');
// url = "http://seeaustinssugar.herokuapp.com/api/v1/entries.json?count=1"

// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// document.write(q.host);
// document.write(q.pathname);
// document.write(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// document.write(qdata.month);
const http = require('http');
const axios = require('axios');

url = "http://seeaustinssugar.herokuapp.com/api/v1/entries.json?count=1"

var sgv = "";
var direction = "";

async function apiCall(){
const data =  await axios.get(url).then(res => res.data);
  sgv = data[0].sgv;
  direction = data[0].direction;

  console.log(sgv, direction);

  if (direction === 'NOT COMPUTABLE') {
    direction = 'Flat';
  }

// window.print ('Content-Type: text/html\n\n');
// window.print('<link rel="shortcut icon" type="image/x-icon" href="favicon.png"  >');
// window.print ('<h3 align="center" Austin is</h3>')
let handleRequest = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });
  response.write('Hi There!');
  response.end();
};

http.createServer(handleRequest).listen(8000);

};

apiCall();
  // console.log(sgv, direction);
  // const axios = require('axios');
  // const json =  require('json');
  // var a, b, data, direction, response, sgv, string, url;
  // document.write('Content-Type: text/html\n\n');
  // url = 'http://seeaustinssugar.herokuapp.com/api/v1/entries.json?count=1';
  // // response = urllib.urlopen(url);
  // // string = response.read();
  // data = json.loads(string.slice(1, -1));
  // sgv = data["sgv"];
  // direction = data["direction"];
  // a = sgv.toString();
  // b = direction.toString();
  
  // if (b === "NOT COMPUTABLE") {
  //   b = "Flat";
  // }
  
  // document.open();
  // document.write("<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"favicon.png\"  >");
  // document.write("<link rel=\"stylesheet\" href=\"css/linear-gradient.css\">");
  // document.write("<link rel=\"stylesheet\" href=\"css/IsAustinDeadTextStyles.css\">");
  // document.write("<link rel=\"stylesheet\" href=\"css/IsAustinDeadStyles.css\">");
  
  // if (sgv >= 180) {
  //   document.write("<h3 align=\"center\" class=\"rainbow\">Austin is</h3>");
  //   document.write("<h4 align=\"center\" class=\"rainbow\">DEAD </h4>");
  //   document.write("<h5 align=\"center\" class=\"rainbow\">His blood sugar is HIGH at %s </h5>" % a);
  //   document.write("<h6><center><img src=\"images/stressed.gif\"style=\"width:480px;height:170px;\"></center></h6>");
  // } else {
  //   if (sgv <= 80) {
  //     document.write("<h3 align=\"center\" class=\"rainbow\">Austin is</h3>");
  //     document.write("<h4 align=\"center\" class=\"rainbow\">DEAD </h4>");
  //     document.write("<h5 align=\"center\" class=\"rainbow\">His blood sugar is LOW at %s </h5>" % a);
  //     document.write("<h6><center><img src=\"images/low1.gif\"style=\"width:480px;height:170px;\"></center></h6>");
  //   } else {
  //     document.write("<h3 align=\"center\" class=\"rainbow\">Austin is</h3>");
  //     document.write("<h4 align=\"center\" class=\"rainbow\">NOT DEAD </h4>");
  //     document.write("<h5 align=\"center\" class=\"rainbow\">His blood sugar is %s </h5>" % a);
  //     document.write("<h6><center><img src=\"images/nooice.gif\"style=\"width:480px;height:191px;\"></center></h6>");
  //     document.write("<link rel=\"stylesheet\" href=\"fire.scss\">");
  //     document.write("<div class=\"pyro\"><div class=\"before\"></div><div class=\"after\"></div></div>");
  //   }
  // }
  
  // if (direction === "DoubleUp") {
  //   document.write("<h3><center><img src=\"/images/DoubleUp.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "SingleUp") {
  //   document.write("<h3><center><img src=\"/images/singleup.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "FortyFiveUp") {
  //   document.write("<h3><center><img src=\"/images/45up.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "Flat") {
  //   document.write("<h3><center><img src=\"/images/Flat.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "FortyFiveDown") {
  //   document.write("<h3><center><img src=\"/images/45down.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "SingleDown") {
  //   document.write("<h3><center><img src=\"/images/SingleDown.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "DoubleDown") {
  //   document.write("<h3><center><img src=\"/images/DoubleDown.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  
  // if (direction === "None") {
  //   document.write("<h3><center><img src=\"/images/nonesvg.svg\"style=\"width:240px;height:240px;\"></center></h3>");
  // }
  // document.close();