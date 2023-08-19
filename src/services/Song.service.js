const BaseService = require('./Base.service');
const { isValidObjectId } = require('mongoose');

let _songRepository = null;

class SongService extends BaseService {
  constructor({ SongRepository }) {
    _songRepository = SongRepository;
  }

  async createSong(song) {
    if (!song) throw new Error('Song data is required');

    try {
      return await _songRepository.create(song);
    } catch (error) {
      console.error(error);
    }
  }

  async updateSong(id, song) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const songFound = await _songRepository.getById(id);

    this.isValidValue({ value: songFound, message: 'Song not found' });

    return await _songRepository.update(id, song);
  }

  async deleteSong(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const songFound = await _songRepository.getById(id);

    this.isValidValue({ value: songFound, message: 'Song not found' });

    return await _songRepository.delete(id);
  }

  async getAllSongs() {
    try {
      return await _songRepository.getAll();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get songs');
    }
  }

  async getSongById(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const songFound = await _songRepository.getById(id);

    this.isValidValue({ value: songFound, message: 'Song not found' });

    return songFound;
  }

  isValidId({ id, message }) {
    if (!isValidObjectId(id)) {
      const error = new Error();
      error.status = 400;
      error.message = message;
      throw error;
    }
  }

  isValidValue({ value, message }) {
    if (!value) {
      const error = new Error();
      error.status = 400;
      error.message = message;
      throw error;
    }
  }
}
