const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = userController = {


    // Get all Users
    async getAllUsers(req, res) {
        try {
            const users = await db.user.findAll();
            return res.status(200).json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },

    // Get a User by id
    async getUserById(req, res) {
        try {
            const user = await db.user.findByPk(req.params.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },

    // Update a User
    async updateUser(req, res) {
        try {
            const uid = {
                id: req.user.id
            }
            const user = await db.user.findByPk(uid.id);
            if (!user) return res.status(404).json({ error: "User not found" });
            const updatedUser = await user.update({
                email: req.body.email,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                is_super: req.body.is_super,
                number_of_query: req.body.number_of_query,
                image: req.body.image
            });
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },


    async deleteUser(req, res) {
        try {
            const user = await db.user.findOne({
                where: {
                    email: {
                        [Op.like]: req.body.email,
                    },
                },

            });
            if (!user) return res.status(404).json({ error: "Denna Mail är inte registrerad i Advo, se till att du anger en korrekt e-postadress." });

            // if pass is correct withe compare
            const validpass = await bcrypt.compare(req.body.password, user.password);
            if (!validpass) return res.status(401).send({ error: "Fel lösenord!" });
            await user.destroy();
            return res.status(200).json({ message: "Ditt konto har raderats." });
        } catch (error) {
            return res.status(500).json({ error: "Ett okänt fel inträffade, vänligen försök igen eller kontakta oss på moauayd1998@hotmail.com." });
        }
    }
};