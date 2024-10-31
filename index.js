const express = require("express");
const mongoose = require("mongoose"); 
const app = express();
const port = 3000;
const hotelRoute = require("./routes/hotel")
const roomRoute = require("./routes/room")
const roomTypeRoute = require("./routes/roomType")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route for Hotels
app.use("/hotel", hotelRoute)

//Route for Room
app.use("/room", roomRoute)

//Route for Room Type
app.use("/room-type", roomTypeRoute)

mongoose
  .connect("mongodb://localhost:27017/hotel-management")
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch(() => {
    console.log("MongoDb connection Failed");
  });

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
