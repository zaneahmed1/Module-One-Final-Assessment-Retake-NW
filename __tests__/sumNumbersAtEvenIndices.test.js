const sumNumbersAtEvenIndices = require("../problems/sumNumbersAtEvenIndices")

describe("sumNumbersAtEvenIndices", () => {
    test("Sums the numbers at even indices in an array", () => {
        expect(sumNumbersAtEvenIndices([3,8,2])).toBe(5)
        expect(sumNumbersAtEvenIndices([7,8,3,4])).toBe(10)
        expect(sumNumbersAtEvenIndices([8,3,3,0,8,5,8,2,8,7])).toBe(35)
        expect(sumNumbersAtEvenIndices([85,54,72,99,62,82,76,81,39,51,8,24,3,46,23,22,66,89,5,16,87,90,76,82,48,39,50,44,87,37,17,16,56,8,62,5,11,98,64,8,65,28,42,19,70,96,65,83,40,24])).toBe(1279)
        expect(sumNumbersAtEvenIndices([90,13,75,80,17,79,35,72,12,5,68,33,6,13,51,98,41,44,99,28,16,92,38,42,30,86,71,14,77,70,74,17,96,4,22,11,63,77,41,46,39,98,25,38,73,97,51,76,24,81,85,74,90,68,83,49,5,32,44,72,23,30,90,89,25,8,92,90,47,27,16,44,50,7,84,29,88,67,28,36,64,50,34,79,55,30,92,75,28,43,59,65,84,62,94,16,3,6,88,48])).toBe(2685)
    })
})
