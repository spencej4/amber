const express= require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const config = require('./config.js');

const cors = require('cors')

router.post('/mail', cors(), (req, res, next) =>{
  console.log('Request Body: ', req.body);

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
    // to: 'spencerjack.sj@gmail.com',
    to: 'evalikesdesign@gmail.com',
    subject: 'New Nanny Opportunity!',
    html: `<body style="line-height: 2px">
           <h4 style="display:inline-block">Sender Name: </h4><p style="display:inline-block; margin-left: 5px">${req.body.sender_name}</p> <br>
           <h4 style="display:inline-block">Email Address: </h4><p style="display:inline-block; margin-left: 5px">${req.body.email_address}</p> <br>
           <h4 style="display:inline-block">Baby's Age (Ages): </h4><p style="display:inline-block; margin-left: 5px">${req.body.baby_age}</p> <br>
           <h4 style="display:inline-block">Neighborhood: </h4><p style="display:inline-block; margin-left: 5px">${req.body.neighborhood}</p> <br>
           <h4 style="display:inline-block">Days Needed: </h4><p style="display:inline-block; margin-left: 5px">${req.body.days}</p> <br>
           <h4 style="display:inline-block">How Often: </h4><p style="display:inline-block; margin-left: 5px">${req.body.how_often}</p> <br>
           <h4 style="display:inline-block">Referred By: </h4><p style="display:inline-block; margin-left: 5px">${req.body.referred_by}</p> <br>
           <h4 style="display:inline-block">Note: </h4><p style="display:inline-block; margin-left: 5px">${req.body.note}</p>
           </body>`           
  }


  transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
    console.log('Helper Options:',HelperOptions)
  })

  res.json({msg: res.body});
});


module.exports = router;