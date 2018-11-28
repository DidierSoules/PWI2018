var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/',function(req,res,next) {
    res.render('formulario');
 });

router.post('/',function(req,res,next) {

    var mail = req.body.mail;
    var asunto = req.body.asunto;
    var mensaje = req.body.mensaje;

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
        from: ''+mail+'<perezsmtp@gmail.com>',
        to:"<perezsmtp@gmail.com>",
        subject: asunto,
        text: mensaje
    };

    nodemailer.createTestAccount(function(error,cuenta){
        transporter.sendMail(mailOptions,function(err,info) {
            if(err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    });

    res.render('formulario', {correcto: "Consulta enviada correctamente"});
 

         
});
module.exports = router;