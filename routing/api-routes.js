module.exports = function(app){
		
	// POST routes

	// add user
	app.post("/api/users/add", (req, res) => {
		req.db.User.create({
				name: req.body.name,
				password: req.body.password,
				ageRange: req.body.ageRange,
			})
			.then(data => res.sendStatus(200))
			.catch(err => res.send(err))
	})

	// add meetup
	app.post("/api/meetups/add", (req, res) => {
		req.db.Meetup.create({
				event: req.body.event,
				location: req.body.location,
				scheduleTime: req.body.scheduleTime,
				going: req.body.going,
			})
			.then(data => res.sendStatus(200))
			.catch(err => res.send(err))
	})

	// GET routes

	// get all users
	app.get("/api/users", (req, res) => {
		req.db.User.findAll()
			.then(data => res.json(data))
			.catch(err => res.send(err))
	})

	// get one user
	app.get("/api/users/:id", (req, res) => {
		req.db.User.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(data => res.json(data))
			.catch(err => res.send(err))
	})

	// get all meetups
	app.get("/api/meetups", (req, res) => {
		req.db.Meetup.findAll()
			.then(data => res.json(data))
			.catch(err => res.send(err))
	})

	// get one meetup
	app.get("/api/meetups/:id", (req, res) => {
		req.db.Meetup.findOne({
			where: {
				id: req.params.id
			}
		})
			.then(data => res.json(data))
			.catch(err => res.send(err))
	})
}