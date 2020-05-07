'use strict';
// should alert the system that a package needs to be delivered

const globalEmitter = require('./events.js');
// const EventEmitter = require('events');
// let driverEmitter = new EventEmitter();

const faker = require('faker');

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
}, 2000);