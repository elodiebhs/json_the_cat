const request = require('request');

const breadName = process.argv[2];
console.log(breadName);

const breedFetch = function(breadName){
  request (`https://api.thecatapi.com/v1/breeds/search?q=${breadName}`, function (error, response, body) {
    //console.log(typeof body)
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`Sorry, the breed '${breadName}' was not found.`);
      return;
    }

    console.log(data[0].description);
    //console.log(typeof data);

  });
};
breedFetch(breadName);




