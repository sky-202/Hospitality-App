const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
    required: true,
  },
  modelNo: {
    type: Number,
    required: true,
  },
  tvName: {
    type: String,
    required: true,
  },
  macAddress: {
    type: String,
    required: true,
  },
  wifiInfo: {
    type: String,
    required: true,
  },
  tvSerialNo: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean, 
    default: false,
  },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "hotel" },
  roomType: { type: mongoose.Schema.Types.ObjectId, ref: "room-type" }
});

const Room = mongoose.model("room", roomSchema);

module.exports = Room;
