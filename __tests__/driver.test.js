'use strict';
const driver = require('../lib/driver.js');
const globalEmitter = require('../lib/events.js');

describe('Test DriverHandler by emitting events', () => {
  it('it calls driverHandler by emitting pickup', () => {
    let consolSpy = jest.spyOn(console, 'log');
    let payload = {
      Store: 'pure fashion',
      Id: 28195,
      CustomerName: 'Eyob  Thomas',
      Address: 'Addis Ababa',
    };

    globalEmitter.emit('pickup', payload);
    globalEmitter.on('pickup', driver.pickupHandler);
    expect(consolSpy).toHaveBeenCalledWith(payload);
  });
});
