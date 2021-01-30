// inferenced array with strings
const carMakers = ['toyota', 'chevy', 'honda'];
const dates = [new Date(), new Date()];

// Annotated array with strings
const carMakers2: string[] = ['toyota', 'chevy', 'honda'];

// Inferenced 2d array with strings
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Annotated 2d array with strings
const carsByMake2: string[][] = [['f150'], ['corolla'], ['camaro']];

// Why do we care??

// TS can do type inference when extracting values from an array

// TS can prevent us from adding incompatible values to the array.

// We can get help with 'map', 'forEach', 'reduce' functions

// Flexible - arrays can still contain multiple different types

// Example - Help with inference when extracting values.

// The variables below will show type inference doing its job when you hover over them.

const car = carMakers[0];
const myCar = carMakers.pop();

// The variables below will show how TS can prevent incompatible values from being inserted to arrays.

carMakers.push(100); //  TS automatically throws an error if you try to put anything other than a string into carMakers.

// Help with 'map'
// TS will give us the various autocomplete methods in the function on the argument being passed in the map function.

carMakers.map((car: string): string => {
	return car;
});

// FLexible types in arrays

// Type Inference will only work if initial types of data are in the array
const importantDates = [new Date(), '2020-10-10'];

// This is syntax for type annotation with flexible arrays. This tells TS the data type will either be a Date class or a string.
const importantDates2: (Date | string)[] = [];

// Where to use typed arrays
// Any time we need to represent a collection of records with some arbitrary sort order.
