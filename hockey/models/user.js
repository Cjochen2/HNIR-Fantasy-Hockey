var bcrypt = require('bcrypt');
var Teams = require('./team')


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
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

   
    User.beforeCreate((user, options) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
    });


    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.associate = function(models) {
        models.User.hasMany(models.Team)
    }

    return User;
};