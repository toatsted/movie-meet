module.exports = function(schema, DataTypes){
	return schema.define("User", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false
		},

		agerange: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		timestamps: false
	})
}