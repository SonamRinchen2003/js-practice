const trainee = [
    {name: "karma", age: 24},
    {name: "Dorji", age: 28},
    {name: "Sonam", age: 22},
    {nae: "Pema", age: 31}

];

const adults = trainee.filter(trainee => trainee.age >= 25);

console.log(adults);