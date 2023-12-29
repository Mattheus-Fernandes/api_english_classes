const router = require("express").Router()
const Controller = require("../controller/index")

router.get("/class", Controller.getAll)


module.exports = router