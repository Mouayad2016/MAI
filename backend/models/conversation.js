const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class Conversation extends Model {
        static associations(models) {


        }
    }
    Conversation.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            required: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        chatBot_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false

        },

    }, {
        underscored: true,
        sequelize,
        modelName: "conversation",
        onDelete: "CASCADE",

    });
    return Conversation;
};