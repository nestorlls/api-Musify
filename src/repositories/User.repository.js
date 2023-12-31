const BaseRepository = require('./Base.repository');

let _user = null;

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getByUsername(username) {
    return await _user.findOne({ username });
  }
}

module.exports = UserRepository;
