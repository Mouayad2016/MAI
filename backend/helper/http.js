module.exports = httpResponseHelper = {
    success(res, data) {
        return res.status(200).send(data);
    },
    error(res, message) {
        return res.status(400).send(message);
    },
};