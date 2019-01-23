var Performer = require('mongoose').model("Performer");
var async = require('async');

module.exports = (req,res,next) => {
	console.log(req.body)

	check(req, res);
};

function check(req, res, next) {
	console.log(req.body);
	 let userData = {
		 username: req.body.data.username,
		 password: req.body.data.password
	 };
	 console.log(req.body.data.username);
		 
	 Performer.findOne({username: userData.username, password: userData.password}, function(err, performer) {
		if(err) {
			console.log(err);
			return res.status(500).send();
		}
		if(!performer) {
			return res.send({status:false})
		}
		return res.send({status: true, performer: performer})
		

	})
} 




