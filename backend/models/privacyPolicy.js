const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class Privacy_policies extends Model {
        static associations(models) {}
    }
    Privacy_policies.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            allowNull: false,
            type: DataTypes.TEXT,
        },

    }, {
        underscored: true,
        sequelize,
        modelName: "privacy_policies",
    });
    return Privacy_policies;
};