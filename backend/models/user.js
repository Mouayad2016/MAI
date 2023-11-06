const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associations(models) {

        }
    }
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            required: true,
            // min:2,
            // max:8
        },
        first_name: {
            required: true,
            allowNull: false,
            type: DataTypes.STRING,
        },
        last_name: {
            required: true,
            allowNull: false,
            type: DataTypes.STRING,
        },
        is_super: {
            required: true,
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        number_of_query: {
            required: true,
            allowNull: false,
            defaultValue: 0,
            type: DataTypes.INTEGER,
        },
        image: {
            allowNull: true,
            // type: DataTypes.BLOB("long")
            type: DataTypes.TEXT,
        },


    }, {
        underscored: true,
        sequelize,
        modelName: "user",
        onDelete: "CASCADE",


    });
    return User;
};