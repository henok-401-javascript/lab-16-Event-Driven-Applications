'use strict';

const globalEmitter = require('./events.js');
const venderMessage = require('./allEventHandler.js').venderMessage;

const faker = require('faker');

globalEmitter.on('delivered', venderMessage);

setInterval(() => {
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
}, 5000);
