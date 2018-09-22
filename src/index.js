module.exports = function getZerosCount(number) {
  // your implementation
  var zeros = 0;
  for (var i = 1; number/Math.pow(5,i)>1;i++){
    zeros+=Math.floor(number/Math.pow(5,i));
  }
  return zeros;
}
