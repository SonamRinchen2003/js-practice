const trainee = {
    name: "karma",
    age:24,
    city: "Gelephu",
    vertical: "QA"
};
trainee.vertical = "Dev";
trainee.email = "karma@selisegroup.com";
delete trainee.age;

console.log(trainee);