const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class Chat extends Model {
        static associations(models) {

        }
    }
    Chat.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        isFromUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false

        },
        user_id: {
            required: true,
            allowNull: false,
            type: DataTypes.INTEGER,

        },
        conversation_id: {
            required: true,
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        text: {
            allowNull: true,
            type: DataTypes.TEXT,
        },

    }, {
        underscored: true,
        sequelize,
        modelName: "chat",
    });
    return Chat;
};