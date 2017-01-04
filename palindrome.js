var palindrome = function(string){
  var reverse = [];
  var num = string.length - 1;
  var count = 0;
  for (var i = num; i >= 0; i -= 1){
    if (string[count] !== string[i]){
      return false;
    } else {
      return true;
    }
  }
}


module.exports = palindrome;
