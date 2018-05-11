module.exports = function(app){
	
	app.get("/", (req, res) => {
		res.send(`
<h1>Index page</h1>
<p>this is the index page with the route '/'. It is the default page.</p>
						`);
	})
}
