const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Models
const { User, Artist, Album, Song } = require('../models');

// config
const config = require('../config');
const app = require('.');

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
  });

module.exports = constainer;
