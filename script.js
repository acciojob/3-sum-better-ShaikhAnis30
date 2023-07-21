function threeSum(arr, target) {
// write your code here
  arr.sort((a,b) => a-b);
  let minDiff = Infinity;
  let res = 0;
  for (let i = 0; i < arr.length-2; i++) {
      let j = i+1, k = arr.length-1;
      let tgt = target - arr[i];
      
      while (j < k) {
        let sum = arr[j] + arr[k];
        let threeSum = arr[i] + arr[j] + arr[k];

        if(Math.abs(threeSum-target) < minDiff) {
          minDiff = Math.abs(threeSum-target)
          res = threeSum;
        }

        if(sum > tgt) k--;
        else if (sum < tgt) j++;
        else return tgt;
      }
      while (i < arr.length-2 && arr[i] === arr[i+1]) {
        i++;
      }
  }
    
  return res;
}

module.exports = threeSum;
