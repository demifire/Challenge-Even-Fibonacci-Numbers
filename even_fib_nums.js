/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

 function _sumFibs( maxFibValue ) {
  var sum = 0;
  let arr = [1,2];

    for(let i=1; i<=maxFibValue; i++){
      let z = arr[i-1] + arr[i];
      arr.push(z);
    }
    console.log(arr);

    for(let j=0; arr[j]<=maxFibValue; j++){
      if(arr[j]%2 === 0){
        console.log("arr[j", arr[j])
        sum += arr[j];
      }
    }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  let arr = [1,2];
  let i = 1;
    while(arr[i]<=maxFibValue){
      let z = arr[i-1] + arr[i];
      arr.push(z);
      i++;
    }
    console.log("while arr", arr);

  //do your work here

  


  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};