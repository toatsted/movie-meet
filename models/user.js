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

		ageRange: {
			type: DataTypes.STRING,
			allowNull: false
		},

		love: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {
		timestamps: false
	})
}