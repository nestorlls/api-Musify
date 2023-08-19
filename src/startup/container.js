const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Models
const { User, Artist, Album, Song } = require('../models');

// config
const config = require('../config');
const app = require('.');

// Repositories
const {
  UserRepository,
  ArtistRepository,
  AlbumRepository,
  SongRepository,
} = require('../repositories');

// Services
const { HomeService } = require('../services');

// Controllers
const { HomeController } = require('../controllers');

// Routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const constainer = createContainer();

constainer
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Artist: asValue(Artist),
    Album: asValue(Album),
    Song: asValue(Song),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ArtistRepository: asClass(ArtistRepository).singleton(),
    AlbumRepository: asClass(AlbumRepository).singleton(),
    SongRepository: asClass(SongRepository).singleton(),
  });

module.exports = constainer;
