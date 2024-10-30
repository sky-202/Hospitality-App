const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    city: {
        required: true,
        type: String,
    },
    address: {
        required: true,
        type: String,
    },
    lat: {
        required: true,
        type: String,
    },
    long: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    contactNo: {
        required: true,
        type: String,
    },
    rating: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
})

const Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel;
