const express = require('express')
const cors = require('cors')
// const fileUpload = require('express-fileupload')




const usersRouters = require('./routes/users.routes')

const app = express()

app.use(cors())
app.use(express.json())

// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : './tmp',
//     limits: { fileSize: 10000000 }, // 10MB max
//     abortOnLimit: true
// }));


app.use("/users", usersRouters)



module.exports=app