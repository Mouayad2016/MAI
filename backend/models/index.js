'use strict';
// process.env.NODE_ENV = "production";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.conversation.belongsTo(db.user, { foreignKey: 'user_id' });
db.conversation.hasMany(db.chat, {
    // foreignKey: 'conversation_id',
});
db.user.hasMany(db.conversation, {
    // foreignKey: 'user_id',
});
db.user.hasMany(db.chat, {
    // foreignKey: 'user_id',
});

db.chat.belongsTo(db.conversation, {
    foreignKey: 'conversation_id',
});
db.chat.belongsTo(db.user, {
    foreignKey: 'user_id',
});

db.user.hasMany(db.user_policies, {
    // foreignKey: 'user_id',
});
db.privacy_policies.hasMany(db.user_policies,
    // { foreignKey: 'policy_id' }
);
db.user_policies.belongsTo(db.user, {
    foreignKey: 'user_id',
});
db.user_policies.belongsTo(db.privacy_policies, { foreignKey: 'privacy_policy_id' })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;