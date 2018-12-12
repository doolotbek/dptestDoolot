const mongoose = require( 'mongoose' );

var messageSchema = new mongoose.Schema({
	username : {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
});

mongoose.model( 'Message', messageSchema );
 