'use strict';

const VenderRequestOne = (payload) => {
  console.log(payload);
};

const pickupHandler = (payload) => {
  console.log('Driver pick', payload.Id);
};
const inTransitHandler = (payload) => {
  console.log('in-transit', payload.Id);
};
const driverMessage = (payload) => {
  console.log('Delivered', payload.Id);
};
const venderMessage = (payload) => {
  console.log('VENDOR SAYS: Thank you for choosing us', payload.Id);
};
const eventDelivered = (payload) => {
  console.log('EVENT: DELIVERED', payload.Id);
};

module.exports = {
  venderMessage,
  VenderRequestOne,
  inTransitHandler,
  pickupHandler,
  driverMessage,
  eventDelivered,
};
