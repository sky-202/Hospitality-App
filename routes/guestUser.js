const express = require('express');
const {createGuestUser, updateGusetUser, deleteGuestUser, getGuestUsers, getGuestUser } = require('../controllers/guestUser');

const router = express.Router();

//For creating Guest User
router.post('/create-guest-user', createGuestUser)

//For update Guest User
router.patch('/update-guest-user/:id',updateGusetUser)

//For delete Guest User
router.delete('/delete-guest-user/:id',deleteGuestUser)

//For getting Guest Users
router.get('/get-guest-users',getGuestUsers)

//For getting Guest User
router.get('/get-guest-user/:id',getGuestUser)

module.exports = router