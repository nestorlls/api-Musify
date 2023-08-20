const { Router } = require('express');

module.exports = ({ SongController }) => {
  const router = Router();

  router.get('/', SongController.getAllSongs);
  router.get('/:songId', SongController.getSongById);
  router.post('/', SongController.createSong);
  router.put('/:songId', SongController.updateSong);
  router.delete('/:songId', SongController.deleteSong);

  return router;
};
