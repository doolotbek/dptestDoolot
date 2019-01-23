const mongoose = require( 'mongoose' );

var performerMessageSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	},
	
	
});

module.exports = mongoose.model( 'PerformerMessage', performerMessageSchema );