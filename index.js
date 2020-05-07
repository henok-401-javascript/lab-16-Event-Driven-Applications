'use strict';
//assign a listener
//handle event
//fire event

const globalEmitter = require('./lib/events.js');

const pickupHandler = (payload) => {
  // console.log('pick up handler', payload);
  console.log(payload);
  // console.log(Id);
  // console.log(CustomerName);
  // console.log('is this', Address);
};

globalEmitter.on('pickup', pickupHandler);
// globalEmitter.emit('pickup');
require('./lib/vendor.js');
