'use strict';

/**
 * service1 service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service1.service1');
