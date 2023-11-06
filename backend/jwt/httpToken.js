const jwt = require("jsonwebtoken");

// create your auth function
// this function validate token when it sent from front end
module.exports = async function auth(req, res, next) {
    const token = req.header("token");
    if (!token) return res.status(401).send("Access Denied");
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};