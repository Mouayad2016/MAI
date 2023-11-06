const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class User_policies extends Model {
        static associations(models) {}
    }
    User_policies.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        privacy_policy_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        underscored: true,
        sequelize,
        modelName: "user_policies",
    });
    return User_policies;
};