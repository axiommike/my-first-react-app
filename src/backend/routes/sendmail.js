var express = require('express');
var router = express.Router();
var statusCode = 'originalcode';
/* GET users listing. */
router.post('/', function (req, res, next) {
    
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    console.log(req.body)
    const msg = {
      to: 'mike@mikecameron.ca', // Change to your recipient
      from: req.body.name +"<"+req.body.email+">", // Change to your verified sender
      subject: "Form email from: " + req.body.name,
      text: req.body.message,
      html: req.body.message,
    }
    console.log(msg);
    sgMail
      .send(msg)
      .then((response) => { 
        console.log("In sendmail"+response)
        res.json([{status:response[0].statusCode}]); 
      })
      .catch((error) => {
        console.log(error)
        res.json([{status:error}]); 
      })
 
  
});

module.exports = router;