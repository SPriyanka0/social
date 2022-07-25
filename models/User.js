const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type: String,
        required:true,
        max: 50,
        unique:true,
    },
    password:{
        type: String,
        require: true,
        min:6,
    },
    profilePicture:{
        type: String,
        default:"",
    },
    //may  take out cover picture
    coverPicture:{
        type: String,
        default:"",
    },
    followers:{
        type: Array,
        default:[],
    },
    following:{
        type: Array,
        default:[],
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},
//when creating new user-update time stamp
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);