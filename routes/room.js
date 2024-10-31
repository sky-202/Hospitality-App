const express = require("express");
const { getRoom, createRoom, updateRoom, deleteRoom, getRooms } = require("../controllers/room");

const router = express.Router();

//For creating room
router.post("/create-room", createRoom)

//For getting all rooms
router.get('/get-rooms/:id',getRooms)

//For getting room by id
router.get('/get-room/:id',getRoom)

//For updating room
router.patch('/update-room/:id',updateRoom)

//For deleting room
router.delete('/delete-room/:id',deleteRoom)

module.exports = router