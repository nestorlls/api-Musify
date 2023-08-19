const { isValidObjectId } = require('mongoose');
const BaseService = require('./Base.service');

let _artistRepository = null;

class ArtistService extends BaseService {
  constructor({ ArtistRepository }) {
    super(ArtistRepository);
    _artistRepository = ArtistRepository;
  }

  async createArtist(artist) {
    if (!artist) throw new Error('Artist data is required');

    try {
      return await _artistRepository.create(artist);
    } catch (error) {
      console.error(error);
    }
  }

  async updateArtist(id, artist) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const artistFound = await _artistRepository.getById(id);

    this.isValidValue({ value: artistFound, message: 'Artist not found' });

    return await _artistRepository.update(id, artist);
  }

  async deleteArtist(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const artistFound = await _artistRepository.getById(id);

    this.isValidValue({ value: artistFound, message: 'Artist not found' });

    return await _artistRepository.delete(id);
  }

  async getAllArtists() {
    try {
      return await _artistRepository.getAll();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get artists');
    }
  }

  async getArtistById(id) {
    this.isValidId({ id, message: 'Invalid id or id is required' });

    const artistFound = await _artistRepository.getById(id);

    this.isValidValue({ value: artistFound, message: 'Artist not found' });

    return artistFound;
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

module.exports = ArtistService;
