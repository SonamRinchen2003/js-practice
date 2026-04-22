function splitBill(total, people, tipPercent) {

  const tipAmount = total * (tipPercent / 100);

  const finalBill = total + tipAmount;

  return finalBill / people;
}
console.log(splitBill(1000, 4, 10)); // 275
console.log(splitBill(500, 2, 10));  // 275
console.log(splitBill(1200, 3, 15)); // 460
console.log(splitBill(600, 5, 0));   // 120