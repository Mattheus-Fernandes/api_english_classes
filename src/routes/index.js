const router = require("express").Router()
const Controller = require("../controller/index")

router.get("/class", Controller.getAll)
router.get("/class/:student", Controller.getStudent)
router.post("/class", Controller.saveClass)
router.put("/class/:id", Controller.editStudent)
router.delete("/class/:id", Controller.deleteStudent)




module.exports = router