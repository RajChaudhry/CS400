var express = require('express');
var router = express.Router();
var request = require('request');


/* GET all businesses near me */
router.get('/', function(req, res, next) {
    var options = {
        'method': 'GET',
        'url': 'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972',
        'headers': {
            'Authorization': 'Bearer yO9WP29WFQ9NPQhuqhY4SvxHj2drsOTKbVRMTxwzNy9YV8A3mvbHHB-cpzcTHO70fO6GWRS4xL5pqdu5k77HnAqMWuaKvC_EEH9uhnXPFz5CmIVfb4EhgSq38GyHXnYx',
            'Cookie': '__cfduid=dc24e876b83b43d91330a48867d05d5b51585933364'
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body);
    });
});

module.exports = router;
