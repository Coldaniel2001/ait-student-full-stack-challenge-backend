const GilfModel = require("../models/gilfsModels");


const search = async (req, res) => {
  const { query } = req.params
  try {

    const nameGilf = await GilfModel.find({
      nameGilf: { $regex: new RegExp(query, "i") },
    });
    const picture = await GilfModel.find({
      picture: { $regex: new RegExp(query, "i") },
    });
    const genre = await GilfModel.find({
      genre: { $regex: new RegExp(query, "i") },
    });
    res.status(200).json({ ok: true, data: { nameGilf, picture, genre } })
  } catch(error) {
    res.status(500).send({ status: 'FALSE' })
  }
}

module.exports = { search }