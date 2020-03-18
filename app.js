var app = require("express")();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/adopt_a_pet");
var pet = require("./models/pet");
var commment = require("./models/comment");
var user = require("./models/user");

/*
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
);*/


app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");

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
            res.render("index", {pets : allPets});
        }
	})
	
});


app.post("/pets" , function(req , res) {
	//get data from form , add to pets array
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newPet = {name: name , image: image,description: description}
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
	Pet.findById(req.params.id, function(err,foundPet){
		if(err){
			console.log(err);
		} else{
			res.render("show", {pet: foundPet});
		}
	});
});
var port = 3560;
app.listen( port , function(){
	console.log("Adopt a Pet server has started on port " + port);
});
