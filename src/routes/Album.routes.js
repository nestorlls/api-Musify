const { Router } = require('express');

module.exports = ({ AlbumController }) => {
  const router = Router();

  router.get('/', AlbumController.getAllAlbums);
  router.get('/:albumId', AlbumController.getAlbumById);
  router.post('/', AlbumController.createAlbum);
  router.put('/:albumId', AlbumController.updateAlbum);
  router.delete('/:albumId', AlbumController.deleteAlbum);

  return router;
};
