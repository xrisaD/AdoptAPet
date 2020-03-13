var app = require("express")();
app.set("view engine" , "ejs");


app.get("/" , function(req , res){
	res.render("landing");
});

app.get("/pets" , function(req, res) {
	var pets = [
		{name : "Suzie" , image : ""},
		{name : "Max" , image : ""},
		{name : "Rex" , image : ""}
	]; 
	res.render("pets", {pets : pets});
});


var port = 3560;
app.listen( port , function(){
	console.log("Adopt a Pet server has started on port " + port);
});
