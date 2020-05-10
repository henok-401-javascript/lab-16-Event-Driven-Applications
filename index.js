'use strict';

const globalEmitter = require('./lib/events.js');

const venderRequest = require('./lib/allEventHandler.js').VenderRequestOne;
const inTransitHandler = require('./lib/allEventHandler.js').inTransitHandler;
const eventDelivered = require('./lib/allEventHandler.js').eventDelivered;

// globalEmitter.on('pickup', handlers.pickupHandler);
// globalEmitter.on('pickup', handlers.pickupHandler2);

require('./lib/driver.js');
globalEmitter.on('pickup', venderRequest);
require('./lib/vendor.js');
globalEmitter.on('in-transit', inTransitHandler);
globalEmitter.on('delivered', eventDelivered);
