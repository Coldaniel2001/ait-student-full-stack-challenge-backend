const express = require("express")
const app = express()

const router = express.Router()

const { addGilf, getAllGilf,deleteGilf, editGilf } = require("../controllers/gilfsControllers")

const { getError } = require("../middlewares/error.middleware")

const { jwtCheck } = require("../middlewares/check-middlewares")

router.get("/", jwtCheck, getError, getAllGilf)
router.post("/:userId", jwtCheck, getError, addGilf)
router.patch("/:userId", jwtCheck, getError, editGilf)
router.delete("/:userId", jwtCheck, getError, deleteGilf)




module.exports = router;