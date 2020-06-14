/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592059894236_1402';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.static = {
    prefix: '/',
    dir: process.cwd() + '/public',
  };
  config.rundir = process.cwd() + '/run';

  // 配置sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'movie',
    username: 'root',
    password: 'w123456',
  };

  // 配置跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // domainWhileList: [ 'http://localhost:3000' ],
  };

  return {
    ...config,
    ...userConfig,
  };
};
