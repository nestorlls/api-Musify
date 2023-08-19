let _songService = null;

class SongController {
  constructor({ SongService }) {
    _songService = SongService;
  }

  async createSong(req, res) {
    const { body } = req;
    const songCreated = await _songService.createSong(body);
    return res.status(201).send(songCreated);
  }

  async updateSong(req, res) {
    const { songId } = req.params;
    const body = req.body;
    const songUpdated = await _songService.updateSong(songId, body);
    return res.status(200).send(songUpdated);
  }

  async deleteSong(req, res) {
    const { songId } = req.params;
    const songDeleted = await _songService.deleteSong(songId);
    return res.status(200).send(songDeleted);
  }

  async getAllSongs(req, res) {
    const songs = await _songService.getAllSongs();
    return res.status(200).send(songs);
  }

  async getSongById(req, res) {
    const { songId } = req.params;
    const song = await _songService.getSongById(songId);
    return res.status(200).send(song);
  }
}

module.exports = SongController;
