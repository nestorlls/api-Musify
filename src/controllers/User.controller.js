let _userService = null;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async createUser(req, res) {
    const { body } = req;
    const userCreated = await _userService.createUser(body);
    return res.status(201).send(userCreated);
  }

  async updateUser(req, res) {
    const { userId } = req.params;
    const { name, username, email, password, role, image } = req.body;

    const userUpdated = await _userService.updateUser(userId, {
      name,
      username,
      email,
      password,
      role,
      image,
    });

    return res.status(200).send(userUpdated);
  }

  async deleteUser(req, res) {
    const { userId } = req.params;
    const userDeleted = await _userService.deleteUser(userId);
    return res.status(200).send(userDeleted);
  }

  async getAllUsers(req, res) {
    const users = await _userService.getAllUsers();
    return res.status(200).send(users);
  }

  async getUserById(req, res) {
    const { userId } = req.params;
    const user = await _userService.getUserById(userId);
    return res.status(200).send(user);
  }

  async getUserByUsername(req, res) {
    const { username } = req.params;

    const user = await _userService.getUserByUsername(username);
    return res.status(200).send(user);
  }
}

module.exports = UserController;
