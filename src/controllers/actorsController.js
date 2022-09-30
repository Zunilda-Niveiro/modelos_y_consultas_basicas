const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Actor.findAll()
        .then((actors) => {
            return res.render('actorsList',{
            actors
            })
        })

    },
    new : (req,res) => {

    },
    recomended : (req,res) => {

    },
    detail : (req,res) => {
        
    }
}
