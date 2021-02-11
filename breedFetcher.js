const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error, response, body) {
    //console.log(typeof body) sting

    if (error) {
      //console.log("failed to dowload", error);
      callback(error, null);
      return;
    } else {
      const data = JSON.parse(body);
      //console.log(typeof data) object ;
      if (!data[0]) { // OR (data.length === 0)
        //console.log(`Sorry, the breed '${breedName}' was not found.`);
        return callback((`Sorry, the breed '${breedName}' was not found.`), null)
        
      }
      //console.log(data[0].description); // accessing the description in an array of object
      callback(null,(data[0].description))
    }
  });
};


module.exports = { fetchBreedDescription };




