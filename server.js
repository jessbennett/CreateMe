const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer  = require('nodemailer');
app.use(bodyParser.json({limit:'50mb'})) // handle json data
app.use(bodyParser.urlencoded({ extended: true, limit:'50mb' })) // handle URL-encoded data

require('dotenv').load();

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.post('/api/uploadContactForm', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        <li>Business or personal: ${req.body.selection}</li>
        <li>URL: ${req.body.textarea}</li>
        <li>Description: ${req.body.description}</li>
    </ul>   
    `;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', //I DO NOT HAVE A HOST
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'createme.website@yahoo.com', // generated ethereal user
        pass: "CreateM3Web274" // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"CreateMe Contact Form" <createme.website@yahoo.com>', // sender address
    to: 'jessbennett924@gmail.com', // list of receivers
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

  
const port = 4000;

app.listen(port, () => `Server running on port ${port}`)
    
;