var mongoose = require("mongoose");
//SCHEMA SETUP
var petSchema = new mongoose.Schema({
	name : String,
	image : String,
	description : String
});
var Pet = mongoose.model("Pet" , petSchema);
