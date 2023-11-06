const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const authToken = require('../jwt/httpToken')


// Get all users
router.get("/users", userController.getAllUsers);

// Get a user by ID
router.get("/:id", userController.getUserById);

// Update a user
router.put("/:id", authToken, userController.updateUser);

// Delete a user
router.delete("/delete", userController.deleteUser);

module.exports = router;