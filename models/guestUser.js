const mongoose = require('mongoose')

const guestUserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    bookedBy: {
        type: String,
        default: null
    }, 
    refferedBy: {
        type: String,
        default: null
    },
    refferedByName: {
        type: String,
        default: null
    },
    reasonForStay: {
        type: String,
        default: null
    },
    remarks: {
        type: String,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const GuestUser = mongoose.model('guest-user', guestUserSchema);

module.exports = GuestUser;