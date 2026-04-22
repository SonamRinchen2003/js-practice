//Exercise-1-Filter
const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Sonam", vertical: "QA" },
  { name: "Tshering", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];
const devs = trainees.filter(trainee => trainee.vertical !== "QA" && trainee.vertical !== "BA");
console.log(devs);

//Exercise-2-Map
const devsMap = trainees.map(trainee => trainee.name);
console.log(devsMap);

//Exercise-3-Sort
const devsSort= devsSort.push({ name: "Tashi", vertical: "Dev"});
devsSort.sort((a, b) => a.name - b.name);
console.log(devsSort);

//Exercise-6-Destructuring
const response = {
  id: 42,
  name: "Karma"
  // note: no "contact" field!
};
const email = response?.email || "No Email Provided";
console.log(email);