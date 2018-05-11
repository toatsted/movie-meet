module.exports = function(schema, DataTypes){
	return schema.define("Meetup", {
		event: {
			type: DataTypes.STRING
		},

		location: {
			type: DataTypes.STRING
		},

		scheduleTime: {
			type: DataTypes.DATE
		}
	}, {
		timestamps: false
	})
}