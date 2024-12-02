const express = require("express");

const { createBooking, getBookings, getBooking, updateBooking, deleteBooking } = require('../controllers/booking')

const router = express.Router();

//For creating booking
router.post("/create-booking", createBooking);

//For getting all bookings
router.get("/get-bookings", getBookings);

//For getting booking by id
router.get("/get-booking/:id", getBooking);

//For updating booking
router.patch("/update-booking/:id", updateBooking);

//For deleting booking
router.delete("/delete-booking/:id", deleteBooking);

module.exports = router;