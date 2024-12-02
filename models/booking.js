const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  refId: {
    type: String,
    required: true,
  },
  guestUser: { type: mongoose.Schema.Types.ObjectId, ref: "guest-user" },
  roomType: { type: mongoose.Schema.Types.ObjectId, ref: "room-type" },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: ['Booked', 'Checked-In', 'Checked-Out', 'Canceled'],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Partially-Paid', 'Unpaid'],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;
