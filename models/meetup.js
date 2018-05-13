module.exports = function(schema, DataTypes){
	return schema.define("Meetup", {
		event: {
			type: DataTypes.STRING
		},

		location: {
			type: DataTypes.STRING
		},

		scheduleTime: {
			type: DataTypes.STRING
		},

		going: {
			type: DataTypes.STRING,
			defaultValue: null
		},

		maybe: {
			type: DataTypes.STRING,
			defaultValue: null
		}
	}, {
		timestamps: false
	})
}