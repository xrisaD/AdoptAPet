var app = require("express")();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/adopt_a_pet");

//SCHEMA SETUP
var petSchema = new mongoose.Schema({
	name : String,
	image : String,
	description : String
});

var Pet = mongoose.model("Pet" , petSchema);


Pet.create(   
                {name : "Max" , image : "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1" , description : "This is a dog"}  
            , 
                //Callback
                function(err , pet){
                    if(err){
                        console.log(err);
                    }            
                    else{
                        console.log("NEWLY CREATED PET : ");
                        console.log(pet);
                    }
                }
);


app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");


//PETS ARRAY
/**
var pets = [
		{name : "Max" , image : "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1"},
		{name : "Rex" , image : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"},
		{name : "Suzie" , image : "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"},
		{name : "Max" , image : "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1"},
		{name : "Rex" , image : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}
	]; 
**/
//ROUTES
app.get("/" , function(req , res){
	res.render("landing");
});


//INDEX - show all pets
app.get("/pets" , function(req, res) {
	//Get all pets from db
	Pet.find({} , function(err, allPets){
	    if(err){
	        console.log(err);
	    }
	    else{
            res.render("pets", {pets : allPets});
        }
	})
	
});


app.post("/pets" , function(req , res) {
	//get data from form , add to pets array
	var name = req.body.name;
	var image = req.body.image;
	var newPet = {name : name , image : image}
	//Create a new pet and save to the database
	Pet.create(newPet , function(err , newPet){
	    
	    if(err){
	        //Show message or smth
	        console.log(err);
	    }
	    else{
	        res.redirect("/pets")
	    }
	})
});

//NEW - show form to create new campground
app.get("/pets/new" , function(req , res){
	res.render("new");
});


app.get("/pets/:id" , function(req , res){
    res.send("This will be the show page one dayy");
})
var port = 3560;
app.listen( port , function(){
	console.log("Adopt a Pet server has started on port " + port);
});
