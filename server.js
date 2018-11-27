require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer  = require('nodemailer');
app.use(bodyParser.json({limit:'50mb'})) // handle json data
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' })) // handle URL-encoded data
require('dotenv').load();
//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/search',function(req,res){
    res.sendFile('index.html');
    //It will find and locate index.html from View or Scripts
  });

  app.post('/api/uploadContactForm', (req, res) => {
    const output = `
    <h3>Thank you for contacting us!</h3>
    <p> We will be responding shortly to your request. Please verify the below information is correct.</p>
    <ul>
        <li>First Name: ${req.body.firstname}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        <li>URL: ${req.body.textarea}</li>
        <li>Description: ${req.body.description}</li>
    </ul>   
    `;
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.ethereal.email', //I DO NOT HAVE A HOST
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.pass // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    // setup email data with unicode symbols
    const mailOptions = {
        from: '"CreateMe Contact Form" <createMeHR@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Contact Request", // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
}); 
var port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);