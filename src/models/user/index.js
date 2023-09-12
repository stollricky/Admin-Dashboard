const { mongo, default: mongoose } = require("mongoose");

const userScehma = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
}, {timestamps :true})

const User = mongoose.models.User || mongoose.model('User', userScehma)

export default User;