var request = require('request');

module.exports = function(req, res, next) {
  if(req.body.address) {
    var options = {
      key: process.env.GM_KEY, 
      address: req.body.address
    }
    request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json', 
      qs: options
      }, function(error, response, body) {
        if(error) {
          res.status(400).send(err);
        } 

        var data = JSON.parse(body);
        if(data.results[0] != undefined)
          req.results = data.results[0].geometry.location;
        next();
    });
  } else {
    next();
  }
};  