const mostCommonLetter = require("../problems/mostCommonLetter")

describe("mostCommonLetter", () => {
    test("Returns the most common letter", () => {
        expect(mostCommonLetter("testing")).toBe("t")
        expect(mostCommonLetter("javascript")).toBe("a")
        expect(mostCommonLetter("helloworld")).toBe("l")
        expect(mostCommonLetter("bookkeeper")).toBe("e")
        expect(mostCommonLetter("z")).toBe("z")
    })
})
