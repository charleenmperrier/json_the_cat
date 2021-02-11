const request = require('request');

const argv = process.argv.slice(2);
const breedName = argv[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }

  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`no cat by this name: ${argv[0]}`);
    return;
  }

  console.log(data[0].description);
  
});

