var random = require('./random.js');

var eightBall = function(){
  var num = random(3);
  var result;
  if (num === 1){
    return 'Yes';
  } else if (num === 2){
      return 'No';
    } else if (num === 3){
        return 'Maybe';
      }
}

module.exports = eightBall;
