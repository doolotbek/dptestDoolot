var express = require('express');
var createErrors = require('http-errors');
var app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

require('./setUpMongoose');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var routes = require("./routes");

app.use("/api", routes);

app.use(function(req,res,next){
    console.log("request", req)
    next(createErrors(404));
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'TO REACT' });
//});
// app.post('/save_message', (req, res) => {);
// 	msg = new Message({msg: req.body.message});
// 	msg.save(function (err) {
// 	const Message = require('mongoose').model('Message');
// 	console.log('got req.body: %s',JSON.stringify(req.body)
//      if (err) return handleError(err);
//    });
// 	console.log('msg: %s',JSON.stringify(msg));
// 	res.send(JSON.stringify({
// 		msg:'Success',
// 	}))
// });
