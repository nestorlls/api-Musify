let _artistService = null;

class ArtistController {
  constructor({ ArtistService }) {
    _artistService = ArtistService;
  }

  async createArtist(req, res) {
    const { body } = req;
    const artistCreated = await _artistService.createArtist(body);
    return res.status(201).send(artistCreated);
  }

  async updateArtist(req, res) {
    const { artistId } = req.params;
    const body = req.body;
    const artistUpdated = await _artistService.updateArtist(artistId, body);
    return res.status(200).send(artistUpdated);
  }

  async deleteArtist(req, res) {
    const { artistId } = req.params;
    const artistDeleted = await _artistService.deleteArtist(artistId);
    return res.status(200).send(artistDeleted);
  }

  async getAllArtists(req, res) {
    const artists = await _artistService.getAllArtists();
    return res.status(200).send(artists);
  }

  async getArtistById(req, res) {
    const { artistId } = req.params;
    const artist = await _artistService.getArtistById(artistId);
    return res.status(200).send(artist);
  }
}

module.exports = ArtistController;
