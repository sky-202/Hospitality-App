const Hotel = require("../models/hotel");

//Create Hotel
const createHotel = async (req, res) => {
  let {
    name,
    city,
    address,
    lat,
    long,
    email,
    contactNo,
    rating,
    image,
    status,
    isDeleted,
  } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  if (!city) {
    return res.status(400).json({ message: "City is required" });
  }
  if (!address) {
    return res.status(400).json({ message: "Address is required" });
  }
  if (!lat) {
    return res.status(400).json({ message: "Latitude is required" });
  }
  if (!long) {
    return res.status(400).json({ message: "Longtitude is required" });
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!contactNo || contactNo.length !== 10) {
    return res
      .status(400)
      .json({ message: "Contact Number is required and must be of 10 digits" });
  }
  if (!rating) {
    return res.status(400).json({ message: "Rating is required" });
  }
  if (!image) {
    return res.status(400).json({ message: "Image is required" });
  }

  const isEmail = await Hotel.findOne({ email });
  if (isEmail) {
    return res.status(400).json({ message: "Email is already present" });
  }

  const hotel = await Hotel.create(req.body);
  res.status(200).json({
    message: "Hotel is created",
    data: hotel,
  });
};

//Update Hotel
const updateHotel = async (req, res) => {
  let id = req.params.id;
  const hotel = await Hotel.findById(id);
  if (!hotel) {
    return res.status(400).json({ message: "Hotel not found" });
  }
  let {
    name,
    city,
    address,
    lat,
    long,
    email,
    contactNo,
    rating,
    image,
    status,
    isDeleted,
  } = req.body;

  if (contactNo) {
    if (contactNo.length !== 10) {
      return res.status(400).json({ message: "Contact must be of 10 digits" });
    }
  }

  await Hotel.findByIdAndUpdate(id, req.body);

  let updatedHotel = await Hotel.findById(id);

  return res.status(200).json({
    message: "Hotel Updated",
    data: updatedHotel,
  });
};

//Delete Hotel
const deleteHotel = async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotel.findById(id);
  if (!hotel) {
    return res.status(400).json({ message: "Hotel not found" });
  }

  await Hotel.findByIdAndUpdate(id, {
    isDeleted: true,
  });

  let deletedHotel = await Hotel.findById(id);
  return res.status(200).json({
    message: "Hotel Deleted",
    data: deletedHotel,
  });
};

//Find all hotels which are not deleted
const getHotels = async (req, res) => {
  const getHotels = await Hotel.find({
    isDeleted: false,
  });

  return res.status(200).json({
    message: "All hotels",
    data: getHotels,
  });
};

//Find hotel by id and not deleted
const getHotel = async (req, res) => {
  const id = req.params.id;
  const hotel = await Hotel.findOne({ _id: id, isDeleted: false });
  if (!hotel) {
    return res.status(400).json({ message: "Hotel not found" });
  }

  return res.status(200).json({
    message: "Hotel required",
    data: hotel,
  });
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotels,
  getHotel,
};
