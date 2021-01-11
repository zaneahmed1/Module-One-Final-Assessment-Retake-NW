const countWords = require("../problems/countWords")

describe("countWords", () => {
    test("countWords returns an object", () => {
        expect(typeof countWords(["hi", "hey", "yo", "the"])).toEqual("object")
        expect(typeof countWords(["good", "good", "bad"])).toEqual("object")
      })
    
      test("countWords returns an object with correct counts", () => {
        expect(countWords(["apple", "banana", "carrot", "date", "egg"])).toStrictEqual({
          "apple": 1,
          "banana": 1,
          "carrot": 1,
          "date": 1,
          "egg": 1,
        })
        expect(countWords(["one", "one", "two", "three", "four", "five"])).toStrictEqual({
          "one": 2,
          "two": 1,
          "three": 1,
          "four": 1,
          "five": 1,
        })
        expect(countWords(["me", "the", "me", "the", "you", "we", "the"])).toStrictEqual({
          "me": 2,
          "the": 3,
          "you": 1,
          "we": 1,
        })
        expect(countWords([])).toStrictEqual({})
      })
})
