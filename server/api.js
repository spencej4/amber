const express= require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const config = require('./config.js');

const cors = require('cors')

router.post('/mail', cors(), (req, res, next) =>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, 
    port: 25, 
    auth: {
      user: 'spencerjack.sj@gmail.com',
      pass: config.password
    },
    tls: {
      rejectUnauthorized: false
    }

  });

  let HelperOptions = {
    from: '"Spencer Jack <spencerjack.sj@gmail.com',
    to: 'spencerjack.sj@gmail.com',
    sender_name: req.body.sender_name ,
    email_address: req.body.email_address,
    baby_age: req.body.baby_age,
    neighborhood: req.body.neighborhood,
    days: req.body.days,
    how_often: req.body.how_often,
    referred_by: req.body.referred_by,
    note: req.body.note
    // html: `<p>${req.body.text}</p><h4>from: ${req.body.from}</h4>` 
  }

  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
  })

  res.json({msg: res.body});
});


module.exports = router;