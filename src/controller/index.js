const Class = require("../model/index")

async function getAll (req, res) {

  try {
    const results = await Class.findAll({raw: true, order: [["id", "desc"]]})
    
    if(results){
      res.json(results)
    }else {
      res.json({message: "Nenhum aluno encontrado"})
    }
  }catch(error){
    res.json({error: "Ocorreu um erro..."})
  }
}

async function getStudent (req, res) {
  
  const { student } = req.params

  try {
    if(student != undefined) {
      const results = await Class.findOne({where: {student}})
      
      if(results){
        res.json(results)
      }else {
        res.json({message: "Aluno não encontrado"})
      }
    }
  }catch(error){
    res.json({error: "Ocorreu um erro..."})
  }
}

async function saveClass(req, res) {

  const {student, hour, language, unit} = req.body
  const unitValue = `Unidade ${unit}`


  try{
    if(student !== " " && language !== " " && unit !== " " && hour !== " ") {
      const results = await Class.create({student, language, unit: unitValue, hour})

      if(results) {
        res.json({message: "Aula registrada com sucesso!"})
      }
    }else{
      res.json({message: "Por favor preencha todos os dados!"})
    }
  }catch(error){
    res.json({error: "Ocorreu um erro..."})
  }
}

async function editStudent (req, res) {
  
  const { id } = req.params
  const idNumber = parseInt(id)
  const {student, hour, language, unit} = req.body
  const unitValue = `Unidade ${unit}`


  try{
    if(idNumber){
      if(student !== " " && language !== " " && unit !== " "  && hour !== " ") {
          const results = await Class.update({student, language, unit: unitValue, hour}, {where: {id}})
          

          if(results == false){
            res.json({message: "Aluno não encontrado"})
          }else{
            res.json({message: "Alterações realizadas com sucesso!"})
          }

      }else{
        res.json({message: "Por favor preencha todos os dados!"})
      } 

    }
  }catch(error){
    res.json({error: "Insira somente números"})
  }
}

async function deleteStudent (req, res){

  const { id } = req.params
  const idNumber = parseInt(id)

  try {
    if(idNumber != undefined){
      const results = await Class.destroy({where: {id}})
      
      if(results){
        res.json({message: "Aula excluída!"})
      }else {
        res.json({message: "Não foi possível excluir essa aula"})
      }
    }
  }catch(error){
    res.json({error: "Insira somente números"})
  }

}


module.exports = {
  getAll,
  getStudent,
  saveClass,
  editStudent,
  deleteStudent
}