var express = require("express");
var router = express.Router();
const controller = require("../../Controllers/index");

router.post("/login", controller.authController.login);
router.post("/verifyOTP", controller.authController.verifyOtp);
router.post("/forgotPassword", controller.authController.forgotpassword);
router.post("/updatePassword", controller.authController.updatePasswordLink);
router.post("/updatePassword/:token", controller.authController.restPasswordByEmail);
router.post("/verifyToken", controller.authController.verifypasswordresettoken);
router.post("/resetPassword/:id/:token", controller.authController.restPassword);

module.exports = router;
