const countNumbers = require("../problems/areAnagrams")

describe("areAnagrams", () => {
    test("Returns true for anagrams", () => {
        expect(areAnagrams("listen", "silent")).toBeTrue()
        expect(areAnagrams("elvis", "lives")).toBeTrue()
        expect(areAnagrams("meteor", "remote")).toBeTrue()
        expect(areAnagrams("night", "thing")).toBeTrue()
    })
    test("Returns false for non-strings of values that are not anagrams", () => {
        expect(areAnagrams("dog", "cat")).toBeFalse()
        expect(areAnagrams("apple", "leap")).toBeFalse()
        expect(areAnagrams("pool", "poll")).toBeFalse()
        expect(areAnagrams("aaab", "ba")).toBeFalse()
        expect(areAnagrams(4, 3)).toBeFalse()
    })
})
