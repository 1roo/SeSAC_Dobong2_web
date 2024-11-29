const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET /user
router.get("/", controller.getUser);

// GET /user/aa
// router.get('/aa', controller.a);

// POST /user/login
// router.post('/login', controller.login);

module.exports = router;
