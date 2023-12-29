const router = require("express").Router()
const Controller = require("../controller/index")

router.get("/class", Controller.getAll)
router.post("/class", Controller.saveClass)


module.exports = router