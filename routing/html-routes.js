module.exports = function(app){
	
	app.get("/", (req, res) => {
					res.send(`
					<h1>Index page</h1>
									`);
	})
}
