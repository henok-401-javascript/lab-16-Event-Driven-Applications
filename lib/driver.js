'use strict';
//delivery driver should alert the system when a package is picked up for delivery

// The driver should also alert the system when the package has been delivered.

const globalEmitter = require('./events.js');
const EventEmitter = require('events');
let driverEmitter = new EventEmitter();

const faker = require('faker');

driverEmitter.emit('pickup');
