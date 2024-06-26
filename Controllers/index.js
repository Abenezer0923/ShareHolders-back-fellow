const shareHolderController = require("./Controller/ShareHolders/shareHoldersController");
const authController = require("./Controller/Auth/authController");
const paymentController = require("./Controller/Payments/bankTransferController")
const newPaymentController = require("./Controller/Payments/newBankTransferController");
const telebirrPayment = require("./Controller/Payments/teleBirrController")
const onlinePayment = require('./Controller/Payments/onlineBankTransferController')
module.exports = {
  authController,
  shareHolderController,
  paymentController,
  newPaymentController,
  telebirrPayment,
  onlinePayment
};
