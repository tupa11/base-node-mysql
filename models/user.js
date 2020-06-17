'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            get() {
                const rawValue = this.getDataValue('email');
                return rawValue ? rawValue.toUpperCase() : null;
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue('password', bcrypt.hashSync(value, 10));
            }
        },
        gender: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        getterMethods: {
            fullName() {
                return this.firstName + ' ' + this.lastName;
            }
        }
    });
    User.associate = (models) => {
        // associations can be defined here
        User.hasMany(models.Book, { foreignKey: 'user_id', as: 'company' })
    };

    //compare password
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.getDataValue("password"));
    };
    return User;
}