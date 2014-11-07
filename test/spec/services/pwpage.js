'use strict';

describe('Service: pwPage', function () {

  // load the service's module
  beforeEach(module('tweenLiteApp'));

  // instantiate service
  var pwPage;
  beforeEach(inject(function (_pwPage_) {
    pwPage = _pwPage_;
  }));

  it('should do something', function () {
    expect(!!pwPage).toBe(true);
  });

});
