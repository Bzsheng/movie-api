'use strict';

const Controller = require('egg').Controller;

class MovieController extends Controller {
  async index() {
    const _ctx = this.ctx;
    _ctx.body = await _ctx.model.Movie.findAll();
  }
}

module.exports = MovieController;
