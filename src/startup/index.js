const express = require('express');

let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _express = express().use(router);
    _config = config;
  }

  start() {
    return new Promise((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(
          `${_config.APPLICATION_NAME} api running on port http://localhost:${_config.PORT}/api/v1`
        );

        resolve();
      });
    });
  }
}

module.exports = Server;
