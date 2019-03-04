let express = require('express');
let router = express.Router();
let colors = require('../colors.json');

router.get('/:color', function(req, res, next) {
	for (var color in colors.colors) {
    	if(colors.colors[color].color == req.params.color.toLowerCase()) {
    		res.send(colors.colors[color]);
    	} 
  	}
	res.status(404).send("Error 404: color not found!");
});

router.get('/all', function(req, res, next) {
	res.send(colors.colors);
});


module.exports = router;