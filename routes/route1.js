let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('route1', { title: 'route1' });
});

//router.get('/', function(req, res, next) {
//  //res.render('index', { title: 'Express' });
//  var sqlQuery = 'SELECT * FROM city WHERE city_id=346';
//  mysql.connection.connect();
//  mysql.connection.query(sqlQuery, function (error, results, fields) {
//    if (error) throw error;
//    res.send(JSON.stringify(results[0]));
//  });
//  mysql.connection.end();
//
//});

module.exports = router;