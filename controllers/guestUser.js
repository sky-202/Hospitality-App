const GuestUser = require("../models/guestUser");

//Create Guest User
const createGuestUser = async (req, res) => {
  const {
    fullName,
    age,
    country,
    nationality,
    city,
    gender,
    bookedBy,
    refferedBy,
    refferedByName,
    reasonForStay,
    remarks,
    isDeleted
  } = req.body;
  if (!fullName) {
    return res.status(400).json({ message: "Full Name is required" });
  }
  if (!age) {
    return res.status(400).json({ message: "Full Name is required" });
  }
  if (!country) {
    return res.status(400).json({ message: "Full Name is required" });
  }
  if (!nationality) {
    return res.status(400).json({ message: "Full Name is required" });
  }
  if (!city) {
    return res.status(400).json({ message: "Full Name is required" });
  }
  if (!gender) {
    return res.status(400).json({ message: "Full Name is required" });
  }
  const guestUser = await GuestUser.create(req.body);
  res.status(200).json({
    message: "Guest User is created",
    data: guestUser,
  });
};

// Update Guest User by Id
const updateGusetUser = async (req, res) => {
  let id = req.params.id;
  const guestUser = await GuestUser.findById(id);
  if (!id) {
    return res.status(400).json({ message: "Guest User not found" });
  }
  await GuestUser.findByIdAndUpdate(id, req.body);
  const updatedGuestUser = await GuestUser.findById(id);
  return res.status(200).json({
    message: "Guest User Updated",
    data: updatedGuestUser,
  });
};

//Delete GuestUser
const deleteGuestUser = async (req, res) => {
    const id = req.params.id;
    const guestUser = await GuestUser.findById(id);
    if (!guestUser) {
      return res.status(400).json({ message: "Guest User not found" });
    }
  
    await GuestUser.findByIdAndUpdate(id, {
      isDeleted: true,
    });
  
    let deletedGuestUser = await GuestUser.findById(id);
    return res.status(200).json({
      message: "Guest User Deleted",
      data: deletedGuestUser,
    });
  };
  
  //Find all Guest Users which are not deleted
  const getGuestUsers = async (req, res) => {
    const getGuestUsers = await GuestUser.find({
      isDeleted: false,
    });
  
    return res.status(200).json({
      message: "All Guest Users",
      data: getGuestUsers,
    });
  };
  
  //Find Guest User by id and not deleted
  const getGuestUser = async (req, res) => {
    const id = req.params.id;
    const guestUser = await GuestUser.findOne({ _id: id, isDeleted: false });
    if (!guestUser) {
      return res.status(400).json({ message: "Guest User not found" });
    }
  
    return res.status(200).json({
      message: "Guest User",
      data: guestUser,
    });
  };
  

module.exports = {
  createGuestUser,
  updateGusetUser,
  deleteGuestUser,
  getGuestUsers,
  getGuestUser
};
