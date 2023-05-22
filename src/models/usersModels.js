const { Schema, model } = require("mongoose")

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

const UserModel = model("Users", userSchema)

module.exports = UserModel