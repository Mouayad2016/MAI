const authController = require("../controllers/auth/auth")
const router = require("express").Router();

router.post("/re", authController.UserRegistration);
router.post("/log", authController.UserLogin);

module.exports = router;