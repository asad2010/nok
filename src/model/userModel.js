const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 4,
        maxLength: 12
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }
})

const Users = mongoose.model("Users", userSchema)

module.exports = Users;