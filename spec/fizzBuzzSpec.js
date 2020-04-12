describe("fizzBuzz", function() {
    //  check argument is a number
    it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
    it ("should return FizzBuzz", function (){
        var result = fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    });
    it ("should return Fizz", function (){
        var result = fizzBuzz(3);
        expect(result).toBe("Fizz");
    });
    it ("should return Buzz", function (){
        var result = fizzBuzz(5);
        expect(result).toBe("Buzz");
    });
    it("should return the argument given", function() {
        var result = fizzBuzz(1);
        expect(result).toBe(1);
    });
});
