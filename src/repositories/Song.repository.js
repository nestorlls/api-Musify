const BaseRepository = require('./Base.repository');

let _song = null;

class SongRepository extends BaseRepository {
  constructor({ Song }) {
    super(Song);
    _song = Song;
  }

  async getByName(name) {
    return _song.findOne({ name });
  }
}

module.exports = SongRepository;
