// controllers/userController.js
// Handles incoming requests and uses the repository layer.
const userRepository = require('../repository/userRepository');

const getUsers = async (req, res) => {
    const users = await userRepository.getAllUsers();
    res.json(users);
};

const getUser = async (req, res) => {
    const user = await userRepository.getUserById(req.params.id);
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

const createUser = async (req, res) => {
    const user = await userRepository.createUser(req.body);
    res.status(201).json(user);
};

const updateUser = async (req, res) => {
    const user = await userRepository.updateUser(req.params.id, req.body);
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
};

const deleteUser = async (req, res) => {
    const user = await userRepository.deleteUser(req.params.id);
    user ? res.json({ message: 'User deleted' }) : res.status(404).json({ message: 'User not found' });
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
