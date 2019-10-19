module.exports = function(sequelize, DataTypes) {
    var Teams = sequelize.define("Team", {
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
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
  
    });
    // Teams.associate = function(models){
    //     Teams.belongsTo(models.User)
    // };
    return Teams;
  };