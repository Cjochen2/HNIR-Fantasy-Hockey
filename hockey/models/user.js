module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        firstName: {
            type: DataTypes.STRING,

            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,

            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    });
    return User;
};