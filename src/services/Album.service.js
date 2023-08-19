const BaseService = require('./Base.service');
const { isValidObjectId } = require('mongoose');

let _albumRepository = null;

class AlbumService extends BaseService {
  constructor({ AlbumRepository }) {
    super(AlbumRepository);
    _albumRepository = AlbumRepository;
  }

  async createAlbum(album) {
    if (!album) throw new Error('Album data is required');

    try {
      return await _albumRepository.create(album);
    } catch (error) {
      console.error(error);
    }
  }

  async updateAlbum(id, album) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const albumFound = await _albumRepository.getById(id);

    this.isValidValue({ value: albumFound, message: 'Album not found' });

    return await _albumRepository.update(id, album);
  }

  async deleteAlbum(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const albumFound = await _albumRepository.getById(id);

    this.isValidValue({ value: albumFound, message: 'Album not found' });

    return await _albumRepository.delete(id);
  }

  async getAllAlbums() {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    try {
      return await _albumRepository.getAll();
    } catch (error) {
      console.error(error);
    }
  }

  async getAlbumById(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const albumFound = await _albumRepository.getById(id);

    this.isValidValue({ value: albumFound, message: 'Album not found' });

    return albumFound;
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

module.exports = AlbumService;
