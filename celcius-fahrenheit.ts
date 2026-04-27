const cToF = (c: number): number => {
  return (c * 9) / 5 + 32;
};

const fToC = (f: number): number => {
  return ((f - 32) * 5) / 9;
};

// Testing
console.log(cToF(0));   // 32
console.log(fToC(212)); // 100