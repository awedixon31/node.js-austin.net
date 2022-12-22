// var url = require('url');
// url = "http://seeaustinssugar.herokuapp.com/api/v1/entries.json?count=1"

// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);

const axios = require('axios');

url = "http://seeaustinssugar.herokuapp.com/api/v1/entries.json?count=1"

axios
  .get(url)
  .then(function (response) {
    console.log(response);
  });
              

