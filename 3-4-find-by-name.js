const trainees = [
    { name: "karma", vertical: "Dev" },
    { name: "Dorji", vertical: "QA" },
    { name: "Sonam", vertical: "BA" }
];
function findByName(trainees, name) {
    return trainees.find(trainee => trainee.name === name);
}
const result = findByName(trainees, "Dorji");
console.log(result);
