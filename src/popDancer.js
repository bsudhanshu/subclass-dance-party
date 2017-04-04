var popDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

popDancer.prototype = Object.create(makeDancer.prototype);
popDancer.prototype.constructor = popDancer;

popDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node1.toggle();
};