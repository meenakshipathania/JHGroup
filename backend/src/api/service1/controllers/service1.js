'use strict';

/**
 *  service1 controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service1.service1');
