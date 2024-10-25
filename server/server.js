const express = require('express');
const app = express();
require("dotenv").config({ path: '../.env' });
const nodemailer = require("nodemailer");
const port =  3001;
const cors = require("cors");
const path = require("path")

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    const mailOptions = {
        from: email,
        to: 'yon.palac@gmail.com',
        subject: 'Mensaje de contacto',
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({ message: 'Error al enviar correo' });
        } else {
            res.send({ message: 'Mensaje enviado correctamente' });
        }
    });
});



app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});