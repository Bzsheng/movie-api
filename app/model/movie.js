'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Movie = app.model.define('movie', {
    name: {
      type: STRING(255),
      primaryKey: true,
    },
    img: STRING(255),
    info: STRING(255),
  }, {
    freezeTableName: true,
    tableName: 'movie',
    timestamps: false,
  });

  return Movie;
};
