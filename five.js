var five = function(){
  return 5;
}

five.upHigh = function(){
  return 5 + ' up high!';
}

five.downLow = function(){
  return 5 + ' down low!';
}

five.tooSlow = function(){
  setTimeout(function(){
    return 5;
  }, 500);
}

five.roman = function(){
  return 'V';
}

five.morseCode = function(){
  return '.....';
}

five.negative = function(){
  return '-5';
}

five.loud = function(){
  return 'FIVE';
}

five.smooth = function(){
  return 'S';
}

module.exports = five;
