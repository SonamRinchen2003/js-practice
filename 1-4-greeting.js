function greet(name, hour) {
  let Day;

  if (hour < 12) {
    Day = "morning";
  } else if (hour <= 17) {
    Day = "afternoon";
  } else {
    Day = "evening";
  }
  return `Good ${Day}, ${name}!`;
}
console.log(greet("Karma", 9));   
console.log(greet("Dorji", 14));  
console.log(greet("Sonam", 20));  