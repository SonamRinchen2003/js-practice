type Grade = "A" | "B" | "C" | "D" | "F";

function classify(score: number): Grade {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// Testing
const myGrade: Grade = classify(85); 
console.log(myGrade); // "B"