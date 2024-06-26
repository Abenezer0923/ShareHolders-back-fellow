const express = require("express");
const router = express.Router();

const shareHolder_route = require("./router/shareHolder");
const newPayment = require("./router/newPayment");
const onlinePayment = require("./router/onlinePayment");
const auth_route = require("./router/auth");
const upload_route = require("./router/payment")
const telebirrPay = require('./router/telbirrPayment')

const paymentController = require('../Controllers/payment.controller')


router.use("/shareHolder", shareHolder_route);
router.use("/auth", auth_route);
router.use("/banktransfer", onlinePayment)
router.use("/newPayment", newPayment);
router.use("/orderPayment", upload_route);
router.use("/payment/telebirr/pay", paymentController.telebirr_pay);
router.use("/payment/telebirr/notifier", paymentController.telebirr_notifier);
router.use("/payment/telebirr/home", paymentController.home);



module.exports = router;
