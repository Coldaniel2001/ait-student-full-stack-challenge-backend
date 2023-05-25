const GilfModel = require("../models/gilfsModels")

const getAllGilf = async (req, res) => {
    try {
        const allGilf = await GilfModel.find({})
        res.status(200).send({ status: 'OK', allGilf })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const addGilf = async (req, res) => {
    const { userId } = req.params
    const { nameGilf, linkGilf, genre } = req.body

    try {
        const newGilf = await GilfModel.create({
            nameGilf,
            picture: linkGilf,
            genre,
            uploadedBy: userId
        })
        res.status(200).send({ status: 'OK', newGilf })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const deleteGilf = async (req, res) => {
    const { userId } = req.params
    const gilf = req.body

    try {

        if (gilf.uploadedBy === userId) {
            const gilfDelete = await GilfModel.findByIdAndDelete({ _id: gilf._id })
            return res.status(200).send({ status: 'OK', gilfDelete })
        }
        if (gilf.uploadedBy !== userId) {
            return res.status(200).send({ status: 'Error', msg:'This gif is not from this user' })
        }

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}
const editGilf = async (req, res) => {
    const { userId } = req.params
    const gilf = req.body

    try {

        if (gilf.uploadedBy === userId) {
            const gilfEdit = await GilfModel.findByIdAndUpdate(
                gilf._id,
                {
                    nameGilf: gilf.nameGilf,
                    picture: gilf.picture,
                    genre: gilf.genre,
                },
                {
                    new: true,
                }
            )
            res.status(200).send({ status: 'OK', gilfEdit })
        }

        if (gilf.uploadedBy !== userId) {
            return res.status(200).send({ status: 'Error', msg:'This gif is not from this user' })
        }

    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { getAllGilf, addGilf, editGilf, deleteGilf }