const Class = require("../model/index")

function getAll (req, res) {

  Class.findAll({raw: true, order: [
    ["id", "desc"]
  ]})
    .then(classes => res.json(classes))

}

function saveClass(req, res) {

  const {student, hour, language, data, unit} = req.body
  const unitValue = `Unidade ${unit}`


  if(student !== " " && language !== " " && unit !== " " &&  data !== " " && hour !== " ") {

    Class.create({
      student, language, unit: unitValue, data, hour
    }).then(() => {
      res.json({message: "success"})
    })
    
  }else{
    res.json("Por favor preencha todos os dados")
  }

}


module.exports = {
  getAll,
  saveClass
}