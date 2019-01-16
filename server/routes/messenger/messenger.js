var PerformerMessage = require('mongoose').model("PerformerMessage");
var async = require('async');

module.exports = (req,res,next) => {
	console.log(req.body)

	save(req, res);
};

function save(req, res) {
    console.log(req.body);
     let messageData = {
        text: req.body.data.text,
     };
	 console.log(req.body.data.text);
		 
	 var newMessage = new PerformerMessage(messageData);
    newMessage.save(function(err) {
        if(err) {
            console.log(err);
            return res.send({status:false})
        }
        return res.send({status:true})

	})
} 
