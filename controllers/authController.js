// const db      = require('./../models');
const sql     = require("./mysql2ORMController");
const jwt     = require('jwt-simple');
const config  = require('./../config/keys.js');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  // Sub === subject
  // iat === issued at time
  // Its going to encode the whole 1st object and then add our secret to it
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
};


module.exports = {
  signUp: async (req, res) => {
    const { fullName, email, password } = req.body;
    if(!email || !password) {
      return res.status(422).json({ error: 'You must provide an email and password' });
    }
    try {
      // Check if theres existing user
      let con = await sql.GetConnection();

      const existingUser = await sql.selectWhere(con,"users","email",email);
      // if user exist, throw error
      if(existingUser) {
        return res.status(422).json({ error: 'Email is in use' });
      }
      let InsertObj = {};
      InsertObj.email=email;
      InsertObj.fullName=fullName;
      InsertObj.createdOn=moment().unix();
      const salt = await bcrypt.genSalt();
      console.log('salt', salt);
      const hash = await bcrypt.hash(password, salt);
      console.log('hash', hash);
      InsertObj.password=hash;
      const user = await sql.insertNewUser(con,"users",InsertObj);
      con.end();
      console.log(user);
      res.json({ token: tokenForUser(user)});
    } catch(e) {
      res.status(404).json({ e });
    }
  },
  signIn: (req, res) => {
    //check if
    res.send({ token: tokenForUser(req.user)});
  }
};
