const countLetters = require("../problems/countLetters")

describe("countLetters", () => {
    test("Counts letters in a string with only letters", () => {
        expect(countLetters("abcde")).toBe(5)
        expect(countLetters("aaaAAA")).toBe(6)
        expect(countLetters("")).toBe(0)
        expect(countLetters("f")).toBe(1)
    })
    test("Counts letters and does not count characters that are not letters", () => {
        expect(countLetters("Hi there")).toBe(7)
        expect(countLetters("A p . p ; l e s !")).toBe(6)
        expect(countLetters("....a..:()()")).toBe(1)
    })
})
