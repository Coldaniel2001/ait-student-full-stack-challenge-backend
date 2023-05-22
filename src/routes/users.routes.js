const express =  require("express")
const app = express()

const router = express.Router()

const {getAllUsers} = require("../controllers/usersControllers")

// const {getError} = require("../middlewares/error.middleware")

// const {jwtCheck} = require("../middlewares/check-middlewares")

router.get("/", getAllUsers)



module.exports = router;