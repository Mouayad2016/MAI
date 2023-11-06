const meController = require("../controllers/messages")
const router = require("express").Router();
const authToken = require('../jwt/httpToken')

router.post("/", authToken, meController.sendMessage);
module.exports = router;