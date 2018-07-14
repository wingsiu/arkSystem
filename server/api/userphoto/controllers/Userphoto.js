'use strict';

/**
 * Userphoto.js controller
 *
 * @description: A set of functions called "actions" for managing `Userphoto`.
 */

module.exports = {

  /**
   * Retrieve userphoto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.userphoto.fetchAll(ctx.query);
  },

  /**
   * Retrieve a userphoto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.userphoto.fetch(ctx.params);
  },

  /**
   * Count userphoto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.userphoto.count(ctx.query);
  },

  /**
   * Create a/an userphoto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userphoto.add(ctx.request.body);
  },

  /**
   * Update a/an userphoto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userphoto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userphoto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userphoto.remove(ctx.params);
  }
};
