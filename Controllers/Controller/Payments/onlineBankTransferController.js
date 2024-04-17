const onlinePaymentOrder = require("../../../Models/Payment/onlinePaymentOrder")

const addPaymentHistory = (req, res) => {
    // Retrieve necessary data from request body
    const { shareCatagory, percentage, amount, paymentMethod, payment_id, amount_birr, shareHolder_id, paymentStatus } = req.body;
    console.log({url:req.cloudinary_secure_url})
    // Create a new payment history object
    const newPaymentHistory = new onlinePaymentOrder({
      paidAmount: amount,
      percentage: percentage,
      amount_birr: amount_birr,
      payment: payment_id, //payment_id is the ObjectId of the related payment record
      paymentMethod: paymentMethod,
      shareHolder: shareHolder_id,
      paymentStatus:paymentStatus,
      shareCatagory: shareCatagory,
    });


  // Save the new payment history record to the database
  newPaymentHistory.save()
  .then(savedPaymentHistory => {
    res.status(201).json(savedPaymentHistory); // Respond with the saved payment history object
  })
  .catch(error => {
    res.status(500).json({ error: error.message }); // Handle database save error
  });
};

module.exports = {
    addPaymentHistory
};