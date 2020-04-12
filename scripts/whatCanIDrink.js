whatCanIDrink = function(age) {
    this.age=age;
    if (typeof(age) != "number") return "Error! Argument given is not a number.";
    else if (age<0 || age>=130) return "Sorry. I can’t tell what drink because that age is incorrect!";
    else if (age>=0 && age<14) return "Drink Toddy";
    else if (age>=14 && age<18) return "Drink Coke";
    else if (age>=18 && age<21) return "Drink Beer";
    else return "Drink Whisky";
}