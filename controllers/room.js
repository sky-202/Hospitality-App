const Room = require("../models/room")

//Create Room
const createRoom = async (req, res) => {
  let {
    roomNo,
    tvName,
    modelNo,
    macAddress,
    tvSerialNo,
    wifiInfo,
    price,
    isDeleted,
    isActive,
  } = req.body;

  if (!roomNo) {
    return res.status(400).json({ message: "Room Number is required" });
  }
  if (!modelNo) {
    return res.status(400).json({ message: "Model Number is required" });
  }
  if (!tvName) {
    return res.status(400).json({ message: "TV Name is required" });
  }
  if (!macAddress) {
    return res.status(400).json({ message: "Mac address is required" });
  }
  if (!wifiInfo) {
    return res.status(400).json({ message: "Wi-Fi Info is required" });
  }
  if (!tvSerialNo) {
    return res.status(400).json({ message: "TV Serial Number is required" });
  }
  if (!price) {
    return res.status(400).json({ message: "Contact Number is required and must be of 10 digits" });
  }
  const room = await Room.create(req.body);
  res.status(201).json({
    message: "Room is created",
    data: room,
  });
};

//Update Room
const updateRoom = async (req, res) => {
  let id = req.params.id;
  const room = await Room.findById(id);
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }
  let {
    roomNo,
    modelNo,
    tvName,
    macAddress,
    wifiInfo,
    tvSerialNo,
    price,
    isDeleted,
    isActive,
  } = req.body;

  await Room.findByIdAndUpdate(id, req.body);

  let updatedRoom = await Room.findById(id);

  return res.status(200).json({
    message: "Room Updated",
    data: updatedRoom,
  });
};

//Delete Room
const deleteRoom = async (req, res) => {
  const id = req.params.id;
  const room = await Room.findById(id);
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }

  await Room.findByIdAndUpdate(id, {
    isDeleted: true,
  });

  let deletedRoom = await Room.findById(id);
  return res.status(200).json({
    message: "Room Deleted",
    data: deletedRoom,
  });
};

//Find all rooms which are not deleted
const getRooms = async (req, res) => {
  const getRooms = await Room.find({
    isDeleted: false,
  });

  return res.status(200).json({
    message: "All rooms",
    data: getRooms,
  });
};

//Find room by id and not deleted
const getRoom = async (req, res) => {
  const id = req.params.id;
  const room = await Room.findOne({ _id: id, isDeleted: false });
  if (!room) {
    return res.status(404).json({ message: "Room not found" });
  }

  return res.status(200).json({
    message: "Room required",
    data: room,
  });
};

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getRooms,
  getRoom,
};
