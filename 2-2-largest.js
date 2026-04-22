function findlargest(nums) {
  let largest = nums[0]; 
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
}
console.log(findlargest([3, 7, 2, 9, 1]));
console.log(findlargest([-5, -2, -10]));
console.log(findlargest([42]));
console.log(findlargest([100, 100, 100]));