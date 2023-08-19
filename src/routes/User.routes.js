const { Router } = require('express');

module.exports = ({ UserController }) => {
  const router = Router();

  router.get('/', UserController.getAllUsers);
  router.get('/:userId', UserController.getUserById);
  router.get('/username/:username', UserController.getUserByUsername);
  router.post('/', UserController.createUser);
  router.put('/:userId', UserController.updateUser);
  router.delete('/:userId', UserController.deleteUser);

  return router;
};
