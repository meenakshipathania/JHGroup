'use strict';

/**
 * newser service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newser.newser');
