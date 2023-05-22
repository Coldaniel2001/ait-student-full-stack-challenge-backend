const express = require("express")
const app = express()

const router = express.Router()

const { getAllUsers, getUser, createUser } = require("../controllers/usersControllers")

const { getError } = require("../middlewares/error.middleware")

const { jwtCheck } = require("../middlewares/check-middlewares")

router.get("/:userId",  getUser)
router.get("/", jwtCheck, getError, getAllUsers)
router.post("/", jwtCheck, getError, createUser)



module.exports = router;