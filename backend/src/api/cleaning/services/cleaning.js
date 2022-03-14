'use strict';

/**
 * cleaning service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cleaning.cleaning');
