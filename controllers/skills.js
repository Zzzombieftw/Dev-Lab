
import * as skillDb from "../data/skill-db.js"


export{
    index,
    show,
    newSkill as new,
    create,
    deleteSkill as delete,
    editSkill as edit
    
}

function editSkill(req, res) {
    res.redirect('/skills/edits')
}


function deleteSkill(req, res) {
    skillDb.findByIdAndDelete(req.params.id, function(error, skill) {
      res.redirect('/skills')
    })
  }





function create(req, res) {
    skillDb.create(req.body, function(erroe, skill){
        res.redirect('/skills')
    })
}



function newSkill(req, res) {
    res.render('skills/new')
}


function index(req, res){
    skillDb.find({}, function(error, skills) {
      res.render('skills/index', {
        skills: skills,
        error: error
      })
    })
}





function show(req, res) {
    skillDb.findById(req.params.id, (error, skill) =>{
        res.render('skills/show',{
            skill,
            error
        })
    })
}
