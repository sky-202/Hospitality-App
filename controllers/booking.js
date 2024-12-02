const Booking = require("../models/booking");

//Create Booking
const createBooking = async (req, res) => {
  let {
    refId,
    guestUser,
    roomType,
    checkIn,
    checkOut,
    bookingStatus,
    paymentStatus,
    isDeleted,
  } = req.body;

  if (!refId) {
    return res.status(400).json({ message: "Refrence Id is required" });
  }
  if (!guestUser) {
    return res.status(400).json({ message: "Guset User is required" });
  }
  if (!roomType) {
    return res.status(400).json({ message: "Room Type is required" });
  }
  if (!checkIn) {
    return res.status(400).json({ message: "Check-In is required" });
  }
  if (!checkOut) {
    return res.status(400).json({ message: "Check-Out is required" });
  }
  if (!bookingStatus) {
    return res.status(400).json({ message: "Booking Status is required" });
  }
  if (!paymentStatus) {
    return res.status(400).json({ message: "Payment Status is required" });
  }

  const booking = await Booking.create(req.body);
  res.status(200).json({
    message: "Booking is created",
    data: booking,
  });
};

//Update Booking
const updateBooking = async (req, res) => {
  let id = req.params.id;
  const booking = await Booking.findById(id);
  if (!booking) {
    return res.status(400).json({ message: "Booking not found" });
  }
  let {
    refId,
    guestUser,
    roomType,
    checkIn,
    checkOut,
    bookingStatus,
    paymentStatus,
    isDeleted,
  } = req.body; 

  await Booking.findByIdAndUpdate(id, req.body);

  let updatedBooking = await Booking.findById(id);

  return res.status(200).json({
    message: "Booking Updated",
    data: updatedBooking,
  });
};

//Delete Booking
const deleteBooking = async (req, res) => {
  const id = req.params.id;
  
  const booking = await Booking.findById(id);
  if (!booking) {
    return res.status(400).json({ message: "Booking not found" });
  }

  await Booking.findByIdAndUpdate(id, {
    isDeleted: true,
  });

  let deletedBooking = await Booking.findById(id);
  return res.status(200).json({
    message: "Booking Deleted",
    data: deletedBooking,
  });
};

//Find all bookings which are not deleted
const getBookings = async (req, res) => {
  const getBookings = await Booking.find({
    isDeleted: false,
  });

  return res.status(200).json({
    message: "All bookings",
    data: getBookings,
  });
};

//Find booking by id and not deleted
const getBooking = async (req, res) => {
  const id = req.params.id;
  const booking = await Booking.findOne({ _id: id, isDeleted: false });
  if (!booking) {
    return res.status(400).json({ message: "Booking not found" });
  }

  return res.status(200).json({
    message: "Booking required",
    data: booking,
  });
};

module.exports = {
  createBooking,
  updateBooking,
  deleteBooking,
  getBookings,
  getBooking,
};
