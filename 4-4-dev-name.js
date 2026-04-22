const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Dorji", vertical: "QA" },
  { name: "Sonam", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];
const devNames = trainees
  .filter(t => t.vertical === "Dev") 
  .map(t => t.name);                

console.log(devNames); 