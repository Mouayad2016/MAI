const express = require("express");
const router = express.Router();
const OpenAIController = require("../controllers/AI/defult");


router.post("/v1/davinci-200", OpenAIController.generateText);



module.exports = router;