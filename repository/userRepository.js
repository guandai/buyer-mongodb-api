// repository/userRepository.js
const User = require('../models/userModel');

const getAllUsers = async () => await User.find();
const getUserById = async (id) => await User.findById(id);
const createUser = async (data) => await User.create(data);
const updateUser = async (id, data) => await User.findByIdAndUpdate(id, data, { new: true });
const deleteUser = async (id) => await User.findByIdAndDelete(id);

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
