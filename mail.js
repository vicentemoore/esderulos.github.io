"use strict"
document.addEventListener("DOMContentLoaded", function () {
    requirejs(["lodash"], function mandarMail() {

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'facanci@gmail.com',
            pass: 'Thor1234#'
        }
    });

    var mailOptions = {
        from: 'facanci@gmail.com',
        to: 'facanci@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    /*
        var datos={ 
        "nombre":localStorage.getItem('nombre'),
        "correo":localStorage.getItem('email'), 
        "hipervinculos":"Hola mi ruli: \nEstos son los productos que hemos seleccionado para ti de acuerdo a tu tipo de pelo, esperamos que te guste 🤗 \n Lista \n Tambien los puedes enviar aquí \n Tambien puedes revisar las respuestas aquí.http://127.0.0.1:5500/11resumen.html \nEsperamos que esta información sea de ayuda a la hora de elegir productos."
        }
        
        emailjs.send("service_jzhxyrg", "template_fy9b2xs", datos)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });*/
})
})

export { mandarMail }