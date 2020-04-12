describe ("whatCanIDrink", function() {
    
    it("should return `Sorry. I can’t tell what drink because that age is incorrect!`", function(){
        expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    it("should return `Drink Toddy`", function(){
        expect(whatCanIDrink(13)).toBe("Drink Toddy");
    });
    it("should return `Drink Coke`", function(){
        expect(whatCanIDrink(17)).toBe("Drink Coke");
    });
    it("should return `Drink Beer`", function(){
        expect(whatCanIDrink(20)).toBe("Drink Beer");
    });
    it("should return `Drink Whisky`", function(){
        expect(whatCanIDrink(129)).toBe("Drink Whisky");
    });
    it("should return `Sorry. I can’t tell what drink because that age is incorrect!`", function(){
        expect(whatCanIDrink(135)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });

});
    


