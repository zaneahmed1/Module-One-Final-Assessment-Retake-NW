const sortedClassNames = require("../problems/sortedClassNames")

describe("sortedClassNames", () => {
    test("Returns an array of class names sorted in ascending lexigraphical order", () => {
        expect(sortedClassNames([
            {subject: "math", studentCount:10},
            {subject: "english", studentCount:20},
            {subject: "history", studentCount:25},
            {subject: "science", studentCount:15},
            {subject: "gym", studentCount:60},
        ])).toEqual(["english", "gym", "history", "math", "science"])
        expect(sortedClassNames([
            {subject: "Introduction to Computer Science", studentCount:100},
            {subject: "Systems Programming and Machine Organization", studentCount:80},
            {subject: "Introduction to Theoretical Computer Science", studentCount:70},
            {subject: "Data Structures and Algorithms", studentCount:95},
        ])).toEqual(["Data Structures and Algorithms", "Introduction to Computer Science", "Introduction to Theoretical Computer Science", "Systems Programming and Machine Organization"])
    })
})
