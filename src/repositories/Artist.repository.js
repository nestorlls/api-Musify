const BaseRepository = require('./Base.repository');

let _artist = null;
class ArtistRepository extends BaseRepository {
  constructor({ Artist }) {
    super(Artist);
    _artist = Artist;
  }

  async getByName(name) {
    return await _artist.findOne({ name });
  }
}

module.exports = ArtistRepository;
