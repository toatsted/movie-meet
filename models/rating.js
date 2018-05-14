function model(schema, DataTypes) {
	let Rating = schema.define("Rating", {
		userID: {
			type: DataTypes.INTEGER
		},

		movieTitle: {
			type: DataTypes.STRING
		},

		rating: {
			type: DataTypes.STRING
		}
	}, {
		timestamps: false
	})	

	Rating.associate = function(models) {
		Rating.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	}

	return Rating;
}

module.exports = model;