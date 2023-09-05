const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/creatuser",
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password",'incorrect password').isLength({ min: 5 }),
  body("name").isLength({ min: 5 }),
  async (req, res) => {
    //console.log(req.body);
    // res.send(req.body);
    //copy code from expess.js
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }




    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location || 'NA',
      });z

      res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);

module.exports = router;
