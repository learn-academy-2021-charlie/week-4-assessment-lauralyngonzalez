// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("Remove and Shuffle", () => {
    it("Removes the first item of the given array and shuffles the items", () => {
        expected1 = ["yellow", "blue", "pink", "green"]
        expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

        // sort the arrays to check if they're equal 
        expect(removeAndShuffle(colors1).sort()).toEqual(expected1.sort())
        expect(removeAndShuffle(colors2).sort()).toEqual(expected2.sort())
    })
})

// b) Create the function that makes the test pass.

// removeAndShuffle
// param colors array
// colors.shift to remove first element
// Shuffle by making a set for unique elements so we don't add duplicate colors.
// Generate a random num from 0 to colors.length
// The random num will take the element at that index of the colors array
// and add it to the set. Do this until set.length == colors.length
// return the set as an array, Array.from(set)

const removeAndShuffle = (colors) => {
    colors.shift()  // removes the first element
    let shuffled = new Set()

    // get a rand idx and keep adding the color at the idx until set's size matches
    while (shuffled.size < colors.length) {
        randIdx = Math.floor(Math.random() * colors.length)

        // set is unique, so add() won't add a duplicate color
        shuffled.add(colors[randIdx])
    }

    return Array.from(shuffled) // return set as an array
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("Min and Max", () => {
    it("Takes an array of nums and returns an array with min and max in ascending order", () => {
        expected1 = [-8, 90]
        expected2 = [5, 109]

        expect(minAndMax(nums1)).toEqual(expected1)
        expect(minAndMax(nums2)).toEqual(expected2)
    })
})

// b) Create the function that makes the test pass.

/*
minAndMax
param: nums array
Get min and max using Math.min and Math.max then return them as an array
Math.min usage requires arguments listed as val1, val2, val3, ...
So use spread operator (...) to expand the array so all elements are included.
*/

const minAndMax = (nums) => {
    return [Math.min(...nums), Math.max(...nums)]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("No Duplicates", () => {
    it("Returns one array with no duplicate values from two arrays", () => {
        expected = [3, 7, 10, 5, 4, 8, 2, 1]

        expect(noDuplicates(testArray1, testArray2)).toEqual(expected)
    })
})

// b) Create the function that makes the test pass.

/*
noDuplicates
param: arr1, arr2
Concat both arrays then use set on the merged array to remove duplicates
*/

const noDuplicates = (nums1, nums2) => {
    merged = nums1.concat(nums2)
    unique = new Set(merged)
    return Array.from(unique)
}