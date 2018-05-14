function model(schema, DataTypes) {
	let User = schema.define("User", {
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

	User.associate = function(models) {
		User.hasMany(models.Rating, {
			onDelete: "cascade"
		});
	}

	return User;
}

module.exports = model;