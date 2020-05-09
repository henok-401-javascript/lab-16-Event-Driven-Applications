'use strict';

const globalEmitter = require('./events.js');

const faker = require('faker');

const deliveredHandler = (payload) => {
  console.log('Thank you for choosing CAPS', payload.Id);
};
module.exports = setInterval(() => {
  let Store = faker.company.companyName();
  let Id = faker.random.number();
  let CustomerName = faker.name.firstName() + ' ' + faker.name.lastName();
  let Address =
    faker.address.streetAddress() +
    ' ' +
    faker.address.city() +
    ' ' +
    faker.address.state() +
    ' ' +
    faker.address.zipCode();

  globalEmitter.emit('pickup', { Store, Id, CustomerName, Address });
  globalEmitter.on('delivered', deliveredHandler);
}, 2000);
