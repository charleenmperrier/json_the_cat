const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    if (!data[0]) {
      callback(null, 'no cat by this name');
      return;
    }
  
    callback(null, data[0].description);
  });

};

module.exports = { fetchBreedDescription };