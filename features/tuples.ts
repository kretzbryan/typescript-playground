// What is a tuple?

// A tuple is and array-like structure where each element represents some property of a record.

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// In the example below, we annotate the order of the data to declare a tuple. Ass you can see below, when we attempt to change the order below, TS will throw an error in your code editor.
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';

// Type Aliases

// type Drink declares the idea of a tuple.
type Drink = [string, boolean, number];

// you can now call Drink anywhere you plan to declare a tuple for a drink.
const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Why tuples?
const carSpecs: [number, number] = [400, 3354];

const carStats = {
	horsepower: 400,
	weight: 3354,
};
