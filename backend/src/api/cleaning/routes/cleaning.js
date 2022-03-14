'use strict';

/**
 * cleaning router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cleaning.cleaning');
