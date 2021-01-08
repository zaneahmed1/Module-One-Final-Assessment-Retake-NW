const removeStringsEndingInBang = require("../problems/removeStringsEndingInBang")

describe("removeStringsEndingInBang", () => {
    test("Removes strings ending in '!'", () => {
        expect(removeStringsEndingInBang(["Hello", "Hi!", "Greetings"]).sort()).toEqual(["Hello", "Greetings"].sort())
        expect(removeStringsEndingInBang(["!Hello", "Hi", "Greeting!s"]).sort()).toEqual(["!Hello", "Hi", "Greeting!s"].sort());
        expect(removeStringsEndingInBang(["", "!", "?"]).sort()).toEqual(["", "?"].sort());
        expect(removeStringsEndingInBang(["Hello there!", "Hi! I'm great.", "Great!  That works."]).sort()).toEqual(["Hi! I'm great.", "Great!  That works."].sort());
        expect(removeStringsEndingInBang(["!!!!a", "!!!!b", "!!!!c!"]).sort()).toEqual(["!!!!a", "!!!!b"].sort());
    })
})