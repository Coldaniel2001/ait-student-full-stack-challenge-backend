const express = require("express")
const app = express()

const router = express.Router()

const { search } = require("../controllers/searchControllers")

const { getError } = require("../middlewares/error.middleware")

const { jwtCheck } = require("../middlewares/check-middlewares")

router.get("/:query", search)


module.exports = router;