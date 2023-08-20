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
const {
  HomeService,
  UserService,
  ArtistService,
  AlbumService,
  SongService,
} = require('../services');

// Controllers
const {
  HomeController,
  UserController,
  ArtistController,
  AlbumController,
  SongController,
} = require('../controllers');

// Routes
const {
  HomeRoutes,
  UserRoutes,
  ArtistRoutes,
  AlbumRoutes,
  SongRoutes,
} = require('../routes/index.routes');
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
    UserService: asClass(UserService).singleton(),
    ArtistService: asClass(ArtistService).singleton(),
    AlbumService: asClass(AlbumService).singleton(),
    SongService: asClass(SongService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ArtistController: asClass(
      ArtistController.bind(ArtistController)
    ).singleton(),
    AlbumController: asClass(AlbumController.bind(AlbumController)).singleton(),
    SongController: asClass(SongController.bind(SongController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ArtistRoutes: asFunction(ArtistRoutes).singleton(),
    AlbumRoutes: asFunction(AlbumRoutes).singleton(),
    SongRoutes: asFunction(SongRoutes).singleton(),
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
