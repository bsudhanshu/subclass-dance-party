// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps; 
  this.$node = $('<span class="dancer"></span>');
  this.$node1 = $('<div><img src="/Users/student/Desktop/code/hrsf75-subclass-dance-party/src/Batman-DC-Comics.jpg"></div>');
  this.step();
  this.setPosition();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function () {
   var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
};
