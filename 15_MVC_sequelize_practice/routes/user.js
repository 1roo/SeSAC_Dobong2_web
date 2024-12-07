// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);
router.get("/signin", controller.getSignin);
router.post("/signin", controller.signin);
router.post("/profile", controller.getUserProfile);
router.patch("/profile/edit", controller.updateProfile);
router.delete("/profile/delete", controller.deleteUser);

module.exports = router;
