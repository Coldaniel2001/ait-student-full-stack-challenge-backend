const { Schema, model } = require("mongoose")

const gilfSchema = Schema({
    nameGilf: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    uploadedBy:{
        type: Schema.Types.ObjectId,
        ref:"Users"
    }
})

const GilfModel = model("Gilfs", gilfSchema)

module.exports = GilfModel