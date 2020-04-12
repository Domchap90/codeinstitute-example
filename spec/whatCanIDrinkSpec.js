describe ("whatCanIDrink", function() {
    
    it("should return `Sorry. I can’t tell what drink because that age is incorrect!`", function(){
        expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");//less than  0
    });
    it("should return `Drink Toddy`", function(){
        expect(whatCanIDrink(1)).toBe("Drink Toddy");  // less than 14
    });
    it("should return `Drink Coke`", function(){
        expect(whatCanIDrink(14)).toBe("Drink Coke");   // less than 18
    });
    it("should return `Drink Beer`", function(){
        expect(whatCanIDrink(18)).toBe("Drink Beer");   // less than 21
    });
    it("should return `Drink Whisky`", function(){
        expect(whatCanIDrink(21)).toBe("Drink Whisky");    // less than 130
    });
    it("should return `Sorry. I can’t tell what drink because that age is incorrect!`", function(){
        expect(whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");   // 130+
    });

});
    


