var moment = require('moment');

var XFooProto = Object.create(HTMLElement.prototype);

XFooProto.createdCallback = function() {
  var day = moment().format('dddd');
  this.textContent = 'today is: ' + day;
};

var Widget = document.registerElement('x-foo', {
  prototype: XFooProto
});

console.log('is moment undefined in x-foo?', typeof moment == 'undefined');
