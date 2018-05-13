module.exports = function(app){
	
	// GET routes
	
	// get index
	app.get("/", (req, res) => {
		res.render("index");
	})
}
