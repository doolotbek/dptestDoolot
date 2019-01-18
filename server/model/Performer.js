let mongoose = require( 'mongoose' );
let autoIncrement = require("mongoose-auto-increment");




let performerSchema = new mongoose.Schema({
	username : {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	performerId: Number,


});


performerSchema.plugin(autoIncrement.plugin, { model: "Preformer", field: "performerId" });
module.exports = mongoose.model("Performer", performerSchema);