const Class = require("../model/index")

function getAll (req, res) {

  Class.findAll({raw: true})
    .then(classes => res.json(classes))

}

function saveClass(req, res) {

  const {student, hour, language, data, unit} = req.body
  const unitValue = `Unidade ${unit}`

  Class.create({
    student, language, unit: unitValue, data, hour
  }).then(() => {
    res.json("created with success")
  })

}


module.exports = {
  getAll,
  saveClass
}