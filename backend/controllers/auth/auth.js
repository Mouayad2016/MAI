const { checkIfEmailExists, hashPassword, createUser } = require("./helper");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../../models");
const { Op } = require("sequelize");

require("./helper");

// const dotenv = require("dotenv");

module.exports = authController = {

    async UserRegistration(req, res) {
        try {
            const emailExist = await checkIfEmailExists(req.body.email);
            if (req.body.policy_accepted == false) {
                return res.status(403).json({ error: 'You have to accept our policy' });
            }
            if (emailExist) {
                return res.status(402).json({ error: 'Email already exists' });
            }
            const hashPasswords = await hashPassword(req.body.password);
            const user = {
                email: req.body.email,
                password: hashPasswords,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                image: req.body.image,
            };
            const savedUser = await createUser(user);
            console.log(req.body.policy_id)
            const userPoliciesRekord = await db.user_policies.create({
                user_id: savedUser.id,
                privacy_policy_id: req.body.policy_id
            })
            return res.status(200).json(savedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    },
    async UserLogin(req, res) {
        try {
            console.log(req.body)
            const user = await db.user.findOne({
                where: {
                    email: {
                        [Op.like]: req.body.email,
                    },
                },

            });
            // check if the email exist
            if (!user)
                return res.status(401).send({
                    error: "Email dose not exist",
                });
            // if pass is correct withe compare
            const validpass = await bcrypt.compare(req.body.password, user.password);
            if (!validpass) return res.status(401).send({ error: "Invalid pass" });
            //Create Token
            // and pass id and email and phone to it so you can get them later from the token
            const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    firstName: user.first_name,
                    last_name: user.last_name,
                    user_name: user.user_name,
                },
                process.env.TOKEN_SECRET
            );
            res.header("token", token).json({
                token,
                user,
            });
        } catch (e) {
            res.status(400).send();
        }
        // data validation

    },
}