const express = require('express');
const router = express.Router();
const JWT = require('jsonwebtoken');

// database connection
const database = require('./database-connection');

// database users' collection
const Users = require('./models/users-model');

// function to verify User agent tokens
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request!');
  } else {
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
      res.status(401).send('Unauthorized request!');
    } else {
      let payload = JWT.verify(token, 'secret');
      if (!payload) {
        res.status(401).send('Unauthorized request!');
      } else {
        req.userId = payload.subject;
        next();
      }
    }
  }

}

// register new user
router.post('/register', async (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.status(400).send("Fill in all fields!");
  } else {
    try {
      let newUser = new Users({
        email: req.body.email,
        password: req.body.password
      });
      let registeredUser = await newUser.save();
      let payload = {subject: registeredUser._id};
      let token = JWT.sign(payload, 'secret');
      res.status(200).send({token});

    } catch (e) {
      console.log(e);
    }
  }
});

// login a registered user
router.post('/login', async (req, res) => {
  if (!req.body.email && !req.body.password) {
    res.status(400).send("Fill in all fields!");
  } else {
    try {
      await Users.findOne({email: req.body.email}, (err, user) => {
        if(err) {
          res.status(500).send("User not found!");
        } else if(!user) {
          res.status(401).send("Invalid email. Try again.");
        } else if (req.body.password !== user.password) {
          res.status(401).send("Invalid password. Try again.");
        } else {
          let payload = {subject: user._id};
          let token = JWT.sign(payload, 'secret');
          res.status(200).send({token});
        }
      });

    } catch (e) {
      console.log(e);
    }
  }

});


// fetch regular events
router.get('/events', (req, res) => {
  let events = [
    {
      "name": "Auto Show",
      "description": "Auto Show of Cars",
      "Date": "2018-6-30, all day"
    },
    {
      "name": "Auto Show 2",
      "description": "Auto Show of Cars",
      "Date": "2018-6-30, all day"
    },
    {
      "name": "Auto Show 3",
      "description": "Auto Show of Cars",
      "Date": "2018-7-24, all day"
    },
    {
      "name": "Auto Show 4",
      "description": "Auto Show of Cars",
      "Date": "2018-7-13, all day"
    },
    {
      "name": "Auto Show 5",
      "description": "Auto Show of Cars",
      "Date": "2018-7-12, all day"
    },
    {
      "name": "Auto Show 6",
      "description": "Auto Show of Cars",
      "Date": "2018-7-10, all day"
    },
    {
      "name": "Auto Show 7",
      "description": "Auto Show of Cars",
      "Date": "2018-7-30, all day"
    }

  ];

  res.json(events);

});


// fetch special events
router.get('/special', verifyToken, (req, res) => {
  let special = [
    {
      "name": "Mega Auto Show",
      "description": "Auto Show of Cars",
      "Date": "2018-6-30, all day"
    },
    {
      "name": "Mega Auto Show 2",
      "description": "Auto Show of Cars",
      "Date": "2018-6-30, all day"
    },
    {
      "name": "Mega Auto Show 3",
      "description": "Auto Show of Cars",
      "Date": "2018-7-24, all day"
    },
    {
      "name": "Mega Auto Show 4",
      "description": "Auto Show of Cars",
      "Date": "2018-7-13, all day"
    },
    {
      "name": "Mega Auto Show 5",
      "description": "Auto Show of Cars",
      "Date": "2018-7-12, all day"
    },
    {
      "name": "Mega Auto Show 6",
      "description": "Auto Show of Cars",
      "Date": "2018-7-10, all day"
    },
    {
      "name": "Mega Auto Show 7",
      "description": "Auto Show of Cars",
      "Date": "2018-7-30, all day"
    }

  ];

  res.json(special);

});





module.exports = router;
