'use strict';

describe('Service: animation', function () {

  // load the service's module
  beforeEach(module('tweenLiteApp'));

  // instantiate service
  var animation;
  beforeEach(inject(function (_animation_) {
    animation = _animation_;
  }));

  it('should do something', function () {
    expect(!!animation).toBe(true);
  });

});
