const BaseRepository = require('./Base.repository');

let _album = null;

class AlbumRepository extends BaseRepository {
  constructor({ Album }) {
    super(Album);
    _album = Album;
  }

  async getByTitle(title) {
    return _album.findOne({ title });
  }
}

module.exports = AlbumRepository;
