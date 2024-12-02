const User = require("../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../services/auth");

const signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      language,
      country,
      isDeleted,
    } = req.body;
    if (!firstName) {
      return res.status(400).json({ message: "First name is required" });
    }
    if (!lastName) {
      return res.status(400).json({ message: "Last name is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (!confirmPassword) {
      return res.status(400).json({ message: "Confirm password is required" });
    }

    if (!phoneNumber || phoneNumber.length !== 10) {
      return res.status(400).json({
        message: "Phone number is required and should be of 10 digits",
      });
    }

    const janch = await User.findOne({ email: email });
    if (janch) {
      return res.status(400).json({ message: "This email is already in use" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and comfirm password mismatched.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      language,
      country,
    });
    // user = user.toJSON();
    // delete user.password;
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logIn = async (req, res) => {
  try {
    const userFound = req.user;
    if (userFound) {
      return res.status(200).json({
        message: "han hogya bhai login ",
        data: userFound,
      });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "E-mail doesn't found" });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (isPasswordMatched) {
      const user = await User.findOne({ email: email });

      const token = createToken(user);
      return res.status(200).json({
        message: "han hogya bhai login ",
        data: user,
        token,
      });
    }
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  logIn,
};
