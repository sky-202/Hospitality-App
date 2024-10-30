const express = require("express");
const { getHotel, createHotel, updateHotel, deleteHotel, getHotels } = require("../controllers/hotel");

const router = express.Router();

//For creating hotel
router.post("/create-hotel", createHotel)

//For getting all hotels
router.get('/get-hotels',getHotels)

//For getting hotel by id
router.get('/get-hotel/:id',getHotel)

//For updating hotel
router.patch('/update-hotel/:id',updateHotel)

//For deleting hotel
router.delete('/delete-hotel/:id',deleteHotel)

module.exports = router
