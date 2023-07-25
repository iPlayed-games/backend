const addNumbers = require("./index")

test('Sum 1 + 2 to equal 3', ()  => {
    expect(addNumbers(1, 2)).toBe(3);
});