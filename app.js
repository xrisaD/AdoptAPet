var app = require("express")();
app.set("view engine" , "ejs");


app.get("/" , function(req , res){
	res.render("landing");
});

app.get("/pets" , function(req, res) {
	var pets = [
		{name : "Suzie" , image : "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"},
		{name : "Max" , image : "https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1"},
		{name : "Rex" , image : "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"}
	]; 
	res.render("pets", {pets : pets});
});


var port = 3560;
app.listen( port , function(){
	console.log("Adopt a Pet server has started on port " + port);
});
