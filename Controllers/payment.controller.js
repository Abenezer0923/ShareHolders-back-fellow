const axios = require('axios')

const home = (req,res) => {
    res.status(200).json({data:"integrating"})
}

const telebirr_pay = (req, res) => {
    try {

  
      const { amount } = req.body;

      /**
       * Author : Abenezer Getachew
       * 
       * Logic  : Saving Ordeer for online payments
       * 
       * Result : Get an order id and make it available for the payment data
       */

        const online_order = [];


        // Getting the order id
        const order_id = online_order._id;

        // Purposebalck Telebirr Integration API
        // const pbe_telebirr_api = process.env.PBE_TELEBIRR_API;
        const tranx_id= "KCCM_" + order_id; 

        const pbe_telebirr_api = "https://tele.purposeblacketh.com/";
        // const notify_url = process.env.KAPS_TELEBIRR_NOTIFY_URL;
    
        // Destructure the value
        // const { subject, amount, tranx_id } = req.body;
    
        const return_url = "https://shareholders.purposeblacketh.com/";
        // const new_data = {
        //   subject,
        //   amount,
        //   tranx_id,
        //   return_url,
        // };
        
        const new_data = {
            subject:"share",
            amount,
            tranx_id,
            return_url,
          };
        // Sending a post request to the api endpoint
        axios
          .post(pbe_telebirr_api + "telebirr/payer", new_data)
          .then((response) => {
            // This returns a response
            res.status(200).json({ data: response.data });
          })
          .catch((error) => {
            console.error("Error Sending Payment Request:", error);
            // This returns a error
            res.status(200).json({ error });
          });
      } catch (error) {
        // handleErrors(error, res);
        console.log({error})
      }
}


const telebirr_notifier = (req,res) => {
    console.log({notified:true})
    // Do telebirr notify logic here
    console.log("Receiving Notification");
    const data = req.body;
    console.log({ incomingData: data });

    // Process Saving The data (save payment Info)

    const newPaymentData = {
      transactionID: data.outTradeNo, // This should be a unique ID for the transaction
      paymentGatewayResponse: { data },
      amount: 1, // Example amount
      currency: "ETB", // Example currency
      paymentMethod: "Telebirr", // Example payment method
      customerID: "customerId123", // Example customer ID
      customerName: "John Doe", // Example customer name
      emailAddress: "john.doe@example.com", // Example email address
      orderID: data.outTradeNo, // Example order ID
      productDetails: "", // Example product details
      billingAddress: {
        country: "Ethiopia",
        postalCode: 1000,
        city: "AA",
        street: "Piassa",
        /* Object containing billing address */
      }, // Example billing address
      shippingAddress: {
        country: "Ethiopia",
        postalCode: 1000,
        city: "AA",
        street: "Piassa",
        /* Object containing shipping address  */
      }, // Example shipping address
      additionalMetadata: {
        /* Additional metadata if needed */
      }, // Example additional metadata
    };
    // Creating a new Payment document
    Payment.create(newPaymentData)
      .then((payment) => {
        console.log("Payment created successfully:", payment);
      })
      .catch((error) => {
        console.error("Error creating payment:", error);
      });

    /**
     * Author : Abenezer Getachew
     * 
     * Logic  : Complete The payment
     * 
     * Result : Saving Neccessary Data 
     * 
     */


      console.log({ abeni : "Finish the rest here" })



}


module.exports = {
    telebirr_pay,home, telebirr_notifier
}