const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

const { NotFoundModdleware, ErrorMiddleware } = require('../middlewares');

module.exports = ({ HomeRoutes, UserRoutes }) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json());
  apiRoutes.use(cors());
  apiRoutes.use(helmet());
  apiRoutes.use(compression());

  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/user', UserRoutes);

  router.use('/api/v1', apiRoutes);
  router.use(NotFoundModdleware);
  router.use(ErrorMiddleware);

  return router;
};
