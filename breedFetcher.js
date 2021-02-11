const request = require('request');

const breedName = process.argv[2];
console.log(breedName);

const breedFetch = function (breedName){
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
    //console.log(typeof body) sting

    if (error) {
      console.log("failed to dowload", error);
      return ;
    } else {
      const data = JSON.parse(body);
      //console.log(typeof data) object ;
      if (!data[0]) { // OR (data.length === 0)
        console.log(`Sorry, the breed '${breedName}' was not found.`);
      return;
      }
        console.log(data[0].description); // accessing the description in an array of object

    }

  });
};
breedFetch(breedName);


module.exports = { breedFetch };




