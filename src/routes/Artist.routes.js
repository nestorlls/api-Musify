const { Router } = require('express');

module.exports = ({ ArtistController }) => {
  const router = Router();

  router.get('/', ArtistController.getAllArtists);
  router.get('/:artistId', ArtistController.getArtistById);
  router.post('/', ArtistController.createArtist);
  router.put('/:artistId', ArtistController.updateArtist);
  router.delete('/:artistId', ArtistController.deleteArtist);

  return router;
};
