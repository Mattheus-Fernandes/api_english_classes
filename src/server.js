const express = require("express")
const app = express()
const router = require("./routes/index")
const connection = require("./database/index")
const ClassModel = require("./model/index")
const cors = require("cors")

//Setting express
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", router)


//Connection with database
connection.connect()

const port = 8080 || process.env

app.listen(port, () => console.log(`The server is running on the port ${port}`))