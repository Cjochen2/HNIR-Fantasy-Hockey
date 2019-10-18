module.exports = function(sequelize, DataTypes) {
  var stats = sequelize.define("Stat", {
    jerseyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      
      allowNull: false
    },

    team: {
      type: DataTypes.STRING,
      
      allowNull: false
    },

    gamesPlayed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    goals: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }

  });
  return stats;
};
