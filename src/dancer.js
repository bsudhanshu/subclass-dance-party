// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps; 
  this.$node = $('<span class="blinkydancer"></span>');
  this.$node1 = $('<div class="popdancer"><img src="https://68.media.tumblr.com/82a98ba71d60495ae0789aa876429f7f/tumblr_n0cpp9fflP1sia4voo1_400.gif"></div>');
  this.$node2 = $('<div class="bouncydancer"><img src="https://i.ytimg.com/vi/TQwmME2SI9E/hqdefault.jpg"></div>');
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
    this.$node1.css(styleSettings);
    this.$node2.css(styleSettings);
};
