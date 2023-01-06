const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  create,
  new: newTicket,
};

function create(req, res) {
  req.body.flight = req.params.id;
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.create(req.body, function (err, ticket) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render("tickets/new", {
      flight: req.params.id,
    });
  });
}
