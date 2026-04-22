const trainee = {
  name: "Karma",
  age: 25,
  city: "Gelephu",
  vertical: "Dev"
};
function describe({ name, age, city, vertical }) {
  return `${name}, ${age}, from ${city}, assigned to ${vertical}.`;
};

console.log(describe(trainee)); 