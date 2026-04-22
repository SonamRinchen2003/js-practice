function sum(amounts) {
  return amounts.reduce((total, current) => {
    return total + current;
  }, 0); 
}
console.log(sum([100, 200, 350, 75])); 
console.log(sum([]));                  