const request = require('request');
const fs = require('fs');

const inputArgs = process.argv.slice(2);
const domain = inputArgs[0];
const fileLocation = inputArgs[1];



request(domain, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  };
  if (response.statusCode !== 200) {
    console.log('error: ', error.message);
    console.log('statusCode: ', response.statusCode);
  }
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  fs.writeFile(fileLocation, body, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${fileLocation}`)
  })
  
})



