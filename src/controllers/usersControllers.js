const UserModel = require('../models/usersModels')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({})
        res.status(200).send({ status: 'OK', allUsers })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const createUser = async (req, res) => {
    const { name, email } = req.body
    try {
        const user = await UserModel.aggregate(
            [
                {
                    $match: { email: email }
                }
            ])
        if (user.length !== 0) {
            return res.status(200).send({ status: 'False', msg: "This User Exist" })
        }
        const newUser = await UserModel.create({
            name,
            email
        })
        return res.status(200).send({ status: 'OK', newUser })

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const getUser = async (req, res) => {
    const { userId } = req.params
    try {
        const user = await UserModel.aggregate(
            [
                {
                    $match: { email: userId }
                }
            ])
        res.status(200).send({ status: 'OK', user })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { getAllUsers, createUser, getUser }