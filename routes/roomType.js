const express = require("express");
const {
  createRoomType,
  updateRoomType,
  deleteRoomType,
  getRoomTypes,
  getRoomType,
} = require("../controllers/roomType");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello  Room Types");
});

//For creating Room Type
router.post("/create-room-type", createRoomType);

//For getting all Room Types
router.get("/get-room-types", getRoomTypes);

//For getting Room Type by id
router.get("/get-room-type/:id", getRoomType);

//For updating Room Type
router.patch("/update-room-type/:id", updateRoomType);

//For deleting Room Type
router.delete("/delete-room-type/:id", deleteRoomType);

module.exports = router;
