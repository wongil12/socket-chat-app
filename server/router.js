const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ response: "서버가 돌고 있따" }).status(200);
});

module.exports = router;