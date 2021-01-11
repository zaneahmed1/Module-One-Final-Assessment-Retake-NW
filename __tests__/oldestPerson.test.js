const oldestPerson = require("../problems/oldestPerson")

describe("oldestPerson", () => {
    test("Returns the person with the highest age", () => {
        expect(oldestPerson({
          "Jenny": 49,
          "Mike": 46,
          "Teddie": 5,
          "Nolan": 12,
          "Orland": 105,
          "Joan": 75,
        })).toBe("Orland")

        expect(oldestPerson({
          "A": -5,
          "B": 88,
          "C": 42,
          "D": -7,
          "E": -55,
          "F": 0,
        })).toBe("B")
    })
})