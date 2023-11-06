const { Op } = require("sequelize");
const db = require("../../models");
const { capitalize } = require("../../helper/text");
const bcrypt = require("bcryptjs");
const http = require("../../helper/http");
const {
    validationResult
} = require('express-validator');
const { checkIfEmailExists, hashPassword, createUser } =

module.exports = authControllerHelper = {
    async checkIfEmailExists(email) {
        return await db.user.findOne({
            where: { email: email },
        });
    },
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    },

    async createUser(userDetails) {
        try {
            return await db.user.create(userDetails);
        } catch (error) {
            console.error(error);
            throw new Error('There was a problem creating the user');
        }
    },
};