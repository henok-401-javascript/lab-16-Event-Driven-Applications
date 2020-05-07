'use strict';

// pickup - Tells the system when a new order needs to be delivered

//in-transit - Tells the system which order is in the process of being delivered

//delivered - Tells the system when the order has been delivered

const EventEmitter = require('events');

const emitter = new EventEmitter();

module.exports = emitter;
