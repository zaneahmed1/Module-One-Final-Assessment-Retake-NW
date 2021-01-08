const areAnagrams = require("../problems/areAnagrams")

describe("areAnagrams", () => {
    test("Returns true for anagrams", () => {
        expect(areAnagrams("listen", "silent")).toBe(true)
        expect(areAnagrams("elvis", "lives")).toBe(true)
        expect(areAnagrams("meteor", "remote")).toBe(true)
        expect(areAnagrams("night", "thing")).toBe(true)
    })
    test("Returns false for non-strings of values that are not anagrams", () => {
        expect(areAnagrams("dog", "cat")).toBe(false)
        expect(areAnagrams("apple", "leap")).toBe(false)
        expect(areAnagrams("pool", "poll")).toBe(false)
        expect(areAnagrams("aaab", "ba")).toBe(false)
        expect(areAnagrams(4, 3)).toBe(false)
    })
})
