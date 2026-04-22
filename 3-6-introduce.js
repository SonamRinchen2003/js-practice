const trainee = {
    name: "karma",
    vertical: "Dev",
    introduce() {
        return `Hi, I'm ${this.name}, training  in ${this.vertical}.`;

    }
};
console.log(trainee.introduce());
