module.exports = function(sequelize, DataTypes) {
  var stats = sequelize.define("Stat", {
    jerseyNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
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
    }
  });
  return stats;
};

// CREATE TABLE stats (
//   id INT NOT NULL AUTO_INCREMENT,
//   jerseyNumber int,
//   name VARCHAR(100) NOT NULL,
//   gamesPlayed int NOT NULL,
//   goals int NOT NULL,
//   assists int NOT NULL,
  
//   PRIMARY KEY (id)
// );