const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
   create,
   
}

function show(req, res) {
    console.log('im the show')
    const flight = Flight.findById(req.params.id)
    console.log(flight)
    res.render('flights/show', { title: 'Flight Details:', flight })
}

function newFlight(req, res){
    
    res.render('flights/new')
    
}

function index(req, res){
    Flight.find({},function(err, flights){
        res.render('flights/index', {
            flights
        })
    })
}
function create(req, res){
    const flight = new Flight(req.body)
    flight.save(function(err){
        res.redirect('/flights')
    })
}




 
  