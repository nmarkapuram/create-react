import { sum } from "../sum"


test("check the sum of 2 integers", () => {
    const result = sum(1,2)
    //Assertion
    expect(result).toBe(3);

})