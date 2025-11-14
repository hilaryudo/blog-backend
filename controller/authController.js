const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const handleError = require("../utils/handleError")



const register = async (req, res) => {
  try {
  const  {username, password, email, role} = req.body;
  const salt = await bcrypt.genSalt();
  hashedPassword = await bcrypt.hash(password, salt);


  const newUser = new User({ username, password: hashedPassword, email, role });
  await newUser.save();
  res.status(201).json({ success: true, message: 'User registered successfully',});


  } catch (error) {
    const errors = handleError(error)
    res.status(400).json(errors);
    
  }
};

const login = async (req, res) => {
    try {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({success: false, msg: "please provide necessary information"});
    }

    const user = await User.findOne({ email });
    if(!user) {
        // return res.status(404).json({success: false, message: "user not found"});
      throw Error("user not found");
        
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        // return res.status(400).json({success: false, message: "Invalid credentials"});
      throw Error("incorrect password");
        
    }

    const token = jwt.sign({id:user._id, role: user.role},
         process.env.jwt_secret,
        {expiresIn: '1d'}
    );

    res.status(200).json({ success: true, message: "login successful", token });
    
    } catch (error) {
    const errors = handleError(error)
    res.status(400).json(errors);
    }
};


module.exports = { register, login };