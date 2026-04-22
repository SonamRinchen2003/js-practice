function classfyBMI(weight, height) {
  const bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25) {
        return "Normal";
    } else if (bmi <=30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(classfyBMI(55, 1.70));
console.log(classfyBMI(95, 1.75));