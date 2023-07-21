function threeSum(arr, target) {
// write your code here
  arr.sort((a,b) => a-b);
  let minDiff = Infinity;
  let res = 0;
  for (let i = 0; i < arr.length-2; i++) {
      let j = i+1, k = arr.length-1;
	  
      while (j < k) {
        let threeSum = arr[i] + arr[j] + arr[k];

        if(Math.abs(threeSum-target) < minDiff) {
          minDiff = Math.abs(threeSum-target)
          res = threeSum;
        }

        if(threeSum > tgt) k--;
        else if (threeSum < tgt) j++;
        else return tgt;
      }
      while (i < arr.length-2 && arr[i] === arr[i+1]) {
        i++;
      }
  }
    
  return res;
}

module.exports = threeSum;
