class BaseService {
  constructor(repository) {
    if (!repository) throw new Error('Repository is required');
    this.repository = repository;
  }

  async create(entity) {
    return this.repository.create(entity);
  }

  async update(id, entity) {
    return this.repository.update(id, entity);
  }

  async delete(id) {
    return this.repository.delete(id);
  }

  async getAll() {
    return this.repository.getAll();
  }

  async getById(id) {
    return this.repository.getById(id);
  }
}

module.exports = BaseService;
