let _albumService = null;

class AlbumController {
  constructor({ AlbumService }) {
    _albumService = AlbumService;
  }

  async createAlbum(req, res) {
    const { body } = req;
    const albumCreated = await _albumService.createAlbum(body);
    return res.status(201).send(albumCreated);
  }

  async updateAlbum(req, res) {
    const { albumId } = req.params;
    const body = req.body;
    const albumUpdated = await _albumService.updateAlbum(albumId, body);
    return res.status(200).send(albumUpdated);
  }

  async deleteAlbum(req, res) {
    const { albumId } = req.params;
    const albumDeleted = await _albumService.deleteAlbum(albumId);
    return res.status(200).send(albumDeleted);
  }

  async getAllAlbums(req, res) {
    const albums = await _albumService.getAllAlbums();
    return res.status(200).send(albums);
  }

  async getAlbumById(req, res) {
    const { albumId } = req.params;
    const album = await _albumService.getAlbumById(albumId);
    return res.status(200).send(album);
  }
}

module.exports = AlbumController;
