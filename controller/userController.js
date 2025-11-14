const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({success: true, users});
    } catch (error) {
        res.status(500).json({ success: false,message: 'users not fetched'});
    }
};


const getUser = async (req, res) => {
    const {userId} = req.params
    try {
        const user = await User.findById(userId);
        res.status(200).json({success: true, user});
    } catch (error) {
       res.status(500).json({success: false, message: 'user not fetched'});
    }

};


const deleteUser = async (req, res) => {
    const {userId} = req.params
    try {
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({success: true, message: 'user deleted successfully'});
    } catch (error) {
        res.status(500).json({success: false, message: 'error occured'});
    }
};



module.exports = { getUsers, getUser, deleteUser};