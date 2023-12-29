const express = require("express")
const app = express()
const router = require("./routes/index")
const connection = require("./database/index")
const ClassModel = require("./model/index")


app.use("/", router)

connection.connect()

const port = 8080 || process.env

app.listen(port, () => console.log(`The server is running on the port ${port}`))