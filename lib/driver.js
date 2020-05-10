'use strict';

const globalEmitter = require('./events.js');
const pickupHandler = require('./allEventHandler.js').pickupHandler;
const driverMessage = require('./allEventHandler.js').driverMessage;



const intransitDriverHandler = (payload) => {
  globalEmitter.emit('in-transit', payload);
  setTimeout(() => {
    globalEmitter.emit('delivered', payload);
  }, 1000);
};

globalEmitter.on('pickup', pickupHandler);
globalEmitter.on('pickup',intransitDriverHandler);
globalEmitter.on('delivered', driverMessage);

// globalEmitter.on('pickup', pickupHandler2);
// module.exports = pickupHandler2;
