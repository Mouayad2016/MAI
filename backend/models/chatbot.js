const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class Chatbot extends Model {
        static associations(models) {}
    }
    Chatbot.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            required: true,
            allowNull: false,
            type: DataTypes.STRING,
        },
        chatbotid: {
            type: DataTypes.STRING,
            allowNull: false

        },
        isfree: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },

    }, {
        underscored: true,
        sequelize,
        modelName: "chatbot",
    });
    return Chatbot;
};