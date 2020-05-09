'use strict';
//delivery driver should alert the system when a package is picked up for delivery

// The driver should also alert the system when the package has been delivered.

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

globalEmitter.on('in-transit', inTransitHandler);
globalEmitter.on('delivered', deliveredHandler);

globalEmitter.on('pickup', pickupHandler);

// setInterval(() => {
//   globalEmitter.emit('pickup', venderHandler.Id);
// }, 2000);
