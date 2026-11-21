
import sum from "./sum.js";

describe("Sum Function Test Suite", () => {

    // Test 1: Positive numbers
    test("adds 2 + 2 to equal 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

    // Test 2: Different positive numbers
    test("adds 10 + 20 to equal 30", () => {
        expect(sum(10, 20)).toBe(30);
    });

    // Test 3: Negative numbers
    test("adds -5 + -5 to equal -10", () => {
        expect(sum(-5, -5)).toBe(-10);
    });

    // Test 4: Positive and negative numbers
    test("adds 10 + (-5) to equal 5", () => {
        expect(sum(10, -5)).toBe(5);
    });

    // Test 5: Adding zero
    test("adds 5 + 0 to equal 5", () => {
        expect(sum(5, 0)).toBe(5);
    });

    // Test 6: Adding decimal numbers
    test("adds 2.5 + 3.5 to equal 6", () => {
        expect(sum(2.5, 3.5)).toBe(6);
    });

    // Test 7: Adding two zeros
    test("adds 0 + 0 to equal 0", () => {
        expect(sum(0, 0)).toBe(0);
    });

});
