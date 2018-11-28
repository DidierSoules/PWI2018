var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user:"perezsmtp@gmail.com",
        pass:"Asd12345"
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from:"<perezsmtp@gmail.com>",
    to:"<perezsmtp@gmail.com>",
    subject:"prueba correo node",
    text:"Sos un rese y lo sabes"
};

router.get('/',function(req,res,next) {
    nodemailer.createTestAccount(function(error,cuenta){
        transporter.sendMail(mailOptions,function(err,info) {
            if(err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    });      
});

module.exports = router;