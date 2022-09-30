const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Genre.findAll()
        .then((genres) => {
            return res.render('genresList',{
                genres
            })
        })

    },
    new : (req,res) => {
        
    },
    recomended : (req,res) => {

    },
    detail : (req,res) => {
        db.Genre.findByPk(req.params.id )
        .then(function(genre){  
            res.render('genresDetail',{
                genre
            })
        })
    }
}
