const meController = require("../controllers/conversation")
const router = require("express").Router();
const authToken = require('../jwt/httpToken')

router.post("/", meController.create);
router.get("/all/:id", authToken, meController.getAllUserConversation);
router.get("/:id", meController.getConversationById);
router.delete("/:id", authToken, meController.delete);


module.exports = router;