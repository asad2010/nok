/* W E L C O M E 
   T O
   online magazine "NOK" 
*/
require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const mongoose = require('mongoose')

const authRouter = require("./src/router/authRouter")

const app = express()
// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(fileUpload({useTempFiles:true}))

// routers
app.use("/", authRouter)
// server & connecting to mongodb
const PORT = process.env.PORT || 4000
const {MONGO_URL} = process.env
const start = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family:4
        })
        app.listen(PORT, ()=>console.log(`server runned on port ${PORT}`))
    } catch(error){
        console.error(error)
    }
}
start()