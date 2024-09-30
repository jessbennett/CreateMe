import helmet from "helmet";

require('dotenv').config()

const server = require('server');
const port = process.env.PORT || 5000;



const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer  = require('nodemailer');

const legacy = require('helmet');
const mid = server.utils.modern(legacy);
app.use(helmet.hidePoweredBy())

// server(mid, ...);

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(bodyParser.json({limit:'50mb'})) // handle json data
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' })) // handle URL-encoded data
app.use(helmet());
//app.set('etag', false); (who are you?)

//static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

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
            return (error);
        }
       ('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        ('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
}); 
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "build", "index.html")));

app.set('etag', true);

app.listen(port);