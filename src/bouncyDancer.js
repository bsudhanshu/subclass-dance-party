var bouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

bouncyDancer.prototype = Object.create(makeDancer.prototype);
bouncyDancer.prototype.constructor = bouncyDancer;

bouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node2.toggle();
};