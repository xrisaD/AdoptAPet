var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");


//PETS ARRAY
var pets = [
		{name : "Suzie" , image : "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"},
		{name : "Max" , image : "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1"},
		{name : "Rex" , image : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"},
		{name : "Suzie" , image : "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"},
		{name : "Max" , image : "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1"},
		{name : "Rex" , image : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}
	]; 

//ROUTES
app.get("/" , function(req , res){
	res.render("landing");
});

app.get("/pets" , function(req, res) {
	
	res.render("pets", {pets : pets});
});

//POST ROUTE
app.post("/pets" , function(req , res) {
	//get data from form , add to pets array
	var name = req.body.name;
	var image = req.body.image;
	var newPet = {name : name , image : image}
	pets.push(newPet);
	//redirect back to pets
	res.redirect("/pets");
});

app.get("/pets/new" , function(req , res){
	res.render("new");
});

var port = 3560;
app.listen( port , function(){
	console.log("Adopt a Pet server has started on port " + port);
});
