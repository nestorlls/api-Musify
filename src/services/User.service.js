const { isValidObjectId } = require('mongoose');
const BaseService = require('./Base.service');

let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async createUser(user) {
    if (!user) throw new Error('User data is required');

    const entity = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      role: { 0: 'user', 1: 'admin' }[user.role],
      image: user.image || null,
    };

    return await _userRepository.create(entity);
  }

  async updateUser(id, user) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const userFound = await _userRepository.getById(id);

    this.isValidValue({ value: userFound, message: 'User not found' });

    return await _userRepository.update(id, user);
  }

  async deleteUser(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const userFound = await _userRepository.getById(id);

    this.isValidValue({ value: userFound, message: 'User not found' });

    return await _userRepository.delete(id);
  }

  async getAllUsers() {
    try {
      return await _userRepository.getAll();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get users');
    }
  }

  async getUserById(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const userFound = await _userRepository.getById(id);

    this.isValidValue({ value: userFound, message: 'User not found' });

    return userFound;
  }

  async getUserByUsername(username) {
    this.isValidValue({ value: username, message: 'username is required' });

    const userFound = await _userRepository.getByUsername(username);

    this.isValidValue({ value: userFound, message: 'User not found' });

    return userFound;
  }

  isValidId({ id, message }) {
    if (!isValidObjectId(id)) {
      const error = new Error();
      error.status = 400;
      error.message = message;
      throw error;
    }
  }

  isValidValue({ value, message }) {
    if (!value) {
      const error = new Error();
      error.status = 400;
      error.message = message;
      throw error;
    }
  }
}

module.exports = UserService;
