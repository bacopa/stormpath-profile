var express = require('express');
var router = express.Router();

/* GET home page. */

var stormpath = require('express-stormpath');

router.get('/', stormpath.getUser, function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/secret", stormpath.loginRequired, function (req, res, next) {
	console.log("req.user:", req.user);
	res.render("index", { title: "Secret" });
});

router.post("/middlename/:middlename", stormpath.loginRequired, function (req, res) {

	req.user.middleName = req.params.middlename;
	
	req.user.save(function (err, savedUser) {
		if(err) return res.status(400).send(err);
		res.send(savedUser);
	})

});

module.exports = router;
