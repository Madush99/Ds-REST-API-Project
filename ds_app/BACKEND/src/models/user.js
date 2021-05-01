const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userModel = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    passWrd: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNo: {
        type: String
    },
    profilePic: {
        type: String
    },
},{timestamps: true});


userModel.virtual('password')
.set(function(password){
    this.passWrd = bcrypt.hashSync(password, 10);
});

userModel.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.passWrd);
    }
}



module.exports = mongoose.model('User', userModel);