let express = require("express");
let exphbs = require("express-handlebars");
let bodyParser = require("body-parser");

require("dotenv").config();

let db = require("./models");

let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use((req, res, next) => {
	req.db = db;
	next();
})

require("./routing/api-routes")(app);
require("./routing/html-routes")(app);

db.sequelize.sync()
	.then(() => {
		app.listen(PORT, () => 
			console.log(`app is listening on PORT ${PORT}`))
	})
