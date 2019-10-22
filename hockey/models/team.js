module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {

        teamName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // points1: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        player2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // points2: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        player3: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // points3: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        player4: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // points4: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        player5: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // points5: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false
        },


    });

    Team.associate = function (models) {
        models.Team.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        })
    };

    return Team;
};

