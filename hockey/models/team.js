module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        // teamName: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        p1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        p2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        p3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        p4: {
            type: DataTypes.STRING,
            allowNull: false
        },
        p5: {
            type: DataTypes.STRING,
            allowNull: false
        },
  
    });
    Team.associate = function(models) {
        models.Team.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Team;
  };