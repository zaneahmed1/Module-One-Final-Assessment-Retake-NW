const totalNumberOfStudents = require("../problems/totalNumberOfStudents")

describe("totalNumberOfStudents", () => {
    test("Returns the total number of students in all classes", () => {
        expect(totalNumberOfStudents([
            {subject: "math", studentCount:10},
            {subject: "english", studentCount:20},
            {subject: "history", studentCount:25},
            {subject: "science", studentCount:15},
            {subject: "gym", studentCount:60},
        ])).toBe(130)
        expect(totalNumberOfStudents([
            {subject: "Introduction to Computer Science", studentCount:100},
            {subject: "Systems Programming and Machine Organization", studentCount:80},
            {subject: "Introduction to Theoretical Computer Science", studentCount:70},
            {subject: "Data Structures and Algorithms", studentCount:95},
        ])).toBe(345)
    })
})
