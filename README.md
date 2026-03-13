# Hotel Management System (Hospitality App)

A RESTful API built with Node.js, Express, and MongoDB for managing hotel operations. This system handles various aspects of hospitality management including hotels, rooms, room types, guest users, bookings, and authenticated system users.

## 🚀 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **Authentication & Security:** JSON Web Tokens (JWT), Bcrypt (Password Hashing)
* **Environment Variables:** Dotenv

## ✨ Features

* **Secure Authentication:** JWT-based user authentication to protect sensitive routes (e.g., user management).
* **Hotel Management:** Store and manage hotel details including location coordinates (lat/long), contact info, and ratings.
* **Room & Room Type Management:** Categorize and manage available rooms.
* **Guest Management:** Handle guest user profiles and data.
* **Booking System:** Process and manage hotel reservations.
* **Soft Deletes:** Implemented `isActive` and `isDeleted` flags for safe data management without permanent removal.

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd Hospitality-App

```


2. **Install dependencies:**
```bash
npm install

```


3. **Environment Setup:**
Create a `.env` file in the root directory and add your environment variables (e.g., JWT secret, port, etc.).
4. **Database Setup:**
Ensure you have MongoDB running locally on `mongodb://localhost:27017` or update the connection string in `index.js` to point to your MongoDB Atlas cluster.
5. **Start the server:**
```bash
node index.js

```


The server will start on `http://localhost:3000`.

## 🛣️ API Routes

The application exposes the following base routes:

* **`/hotel`** - CRUD operations for hotels.
* **`/room`** - CRUD operations for specific rooms.
* **`/room-type`** - Manage room categories/types.
* **`/guest-user`** - Manage guest profiles.
* **`/booking`** - Handle room reservations and bookings.
* **`/user`** - System user management *(Protected Route - requires Bearer Token)*.

## 🗄️ Database Models

### Hotel Schema (Example)

The primary `Hotel` model tracks the following data:

* `name` (String, required)
* `city` (String, required)
* `address` (String, required)
* `lat` / `long` (String, required) - Geolocation coordinates
* `email` (String, required)
* `contactNo` (String, required)
* `rating` (String, required)
* `image` (String, required)
* `isActive` (Boolean, default: true)
* `isDeleted` (Boolean, default: false)

## 🏗️ Project Structure

* `index.js` - Application entry point and server configuration.
* `/routes` - Express route definitions for all entities.
* `/controllers` - Business logic and request handlers.
* `/models` - Mongoose database schemas.
* `/middlewares` - Custom middleware functions (e.g., JWT token authentication).
* `/services` - Shared business logic and helper functions.
