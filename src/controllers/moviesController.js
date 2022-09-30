const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
        .then(movies => {
            return res.render('moviesList',{
                movies
            })
        })

    },
    new : (req,res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC' ]
            ],
            LIMIT : 5
        })
        .then(movies => {
            return res.render('newestMovies',{
                movies
            })
        })
        .catch(error => console.log(error))
    },
    recomended : (req,res) => {
        db.Movie.findAll({
            order : [
                ['rating', 'DESC' ]
            ],
            LIMIT : 5
        })

        .then(movies => {
            return res.render('recommendedMovies',{
                movies
            })
        })
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id )
        .then(function(movie){  
            res.render('moviesDetail',{
                movie
            })
        })
        .catch(error => console.log(error))
    },
}

