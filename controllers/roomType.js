const RoomType = require("../models/roomType");

//Create Room Type
const createRoomType = async (req, res) => {
  let {
    name,
    adultCapacity,
    kidCapacity,
    shortCode,
    status,
    description,
    image,
    isDeleted
  } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  if (!adultCapacity) {
    return res.status(400).json({ message: "Adult Capacity is required" });
  }
  if (!shortCode) {
    return res.status(400).json({ message: "Short Code is required" });
  }
  if (!description) {
    return res.status(400).json({ message: "Description is required" });
  }

  const roomType = await RoomType.create(req.body);
  res.status(200).json({
    message: "Room Type is created",
    data: roomType,
  });
};

//Update Room Type
const updateRoomType = async (req, res) => {
  let id = req.params.id;
  const roomType = await RoomType.findById(id);
  if (!roomType) {
    return res.status(400).json({ message: "Room Type not found" });
  }
  await RoomType.findByIdAndUpdate(id, req.body);

  let updatedRoomType = await RoomType.findById(id);

  return res.status(200).json({
    message: "Room Type Updated",
    data: updatedRoomType,
  });
};

//Delete Room Type
const deleteRoomType = async (req, res) => {
  const id = req.params.id;
  const roomType = await RoomType.findById(id);
  if (!roomType) {
    return res.status(400).json({ message: "Room Type not found" });
  }

  await RoomType.findByIdAndUpdate(id, {
    isDeleted: true
  });

  let deletedRoomType = await RoomType.findById(id);
  return res.status(200).json({
    message: "Room Type deleted",
    data: deletedRoomType,
  });
};

//Find all Room Types which are not deleted
const getRoomTypes = async (req, res) => {
  const getRoomTypes = await RoomType.find({
    isDeleted: false
  });

  return res.status(200).json({
    message: "All Room Types",
    data: getRoomTypes
  });
};

//Find Room Type by id and are active
const getRoomType = async (req, res) => {
  const id = req.params.id;
  const roomType = await RoomType.findOne({ _id: id, isDeleted: false });
  if (!roomType) {
    return res.status(404).json({ message: "Room Type not found" });
  }

  return res.status(200).json({
    message: "Room Type required",
    data: roomType,
  });
};

module.exports = {
    createRoomType,
    updateRoomType,
    deleteRoomType,
    getRoomTypes,
    getRoomType
};
