const mongoose = require('mongoose')

const roomTypeSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    adultCapacity: {
        required: true,
        type: Number,
    },
    kidCapacity: {
        default:0,
        type: Number,
    },
    shortCode: {
        required: true,
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const RoomType = mongoose.model('room-type', roomTypeSchema);

module.exports = RoomType;
