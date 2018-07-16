'use strict';

/**
 * Systemuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Systemuser`.
 */

module.exports = {

  /**
   * Retrieve systemuser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.systemuser.search(ctx.query);
    } else {
      return strapi.services.systemuser.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a systemuser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.systemuser.fetch(ctx.params);
  },

  /**
   * Count systemuser records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.systemuser.count(ctx.query);
  },

  /**
   * Create a/an systemuser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.systemuser.add(ctx.request.body);
  },

  /**
   * Update a/an systemuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.systemuser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an systemuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.systemuser.remove(ctx.params);
  },

  /**
   * Add relation to a/an systemuser record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.systemuser.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an systemuser record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.systemuser.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an systemuser record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.systemuser.removeRelation(ctx.params, ctx.request.body);
  }
};
