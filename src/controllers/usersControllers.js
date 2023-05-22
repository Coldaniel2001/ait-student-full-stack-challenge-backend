const UserModel = require('../models/usersModels')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({})
        res.status(200).send({ status: 'OK', allUsers })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports={getAllUsers}