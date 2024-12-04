// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
router.get("/signup", controller.getSignup);
router.post("/signup", controller.signup);
router.get("/signin", controller.getSignin);
router.post("/signin", controller.signin);
router.get("/profile", controller.getProfile);
router.post("/profile", controller.postProfile);
// router.patch("/profile/edit", controller.editProfile);
// router.delete("/profile/delete".controller.deleteUser);

module.exports = router;
