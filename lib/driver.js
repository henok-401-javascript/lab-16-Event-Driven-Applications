'use strict';

const globalEmitter = require('./events.js');
const vender = require('./vendor.js');

const inTransitHandler = (payload) => {
  console.log('in-transit', payload.Id);
};

const deliveredHandler = (payload) => {
  console.log('delivered', payload.Id);
};
const pickupHandler = (payload) => {
  console.log(payload);
  globalEmitter.emit('in-transit', payload);
  globalEmitter.emit('delivered', payload);
};

const pickupHandler2 = (payload) => {
  console.log('Driver pick', payload.Id);
};

globalEmitter.on('delivered', deliveredHandler);
globalEmitter.on('in-transit', inTransitHandler);

globalEmitter.on('pickup', pickupHandler2);
globalEmitter.on('pickup', pickupHandler);

module.exports = {
  pickupHandler,
  pickupHandler2,
  inTransitHandler,
  deliveredHandler,
};
