// Interfaces

// Creates a new type, describing property names and value types of an object.

// Example of annotation of an object without using interface

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
};

// Naming out each type in a function call for each property you expect can cause a lot of duplicate code.

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(`name: ${vehicle.name}`);
	console.log(`year: ${vehicle.year}`);
	console.log(`broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Example of annotation using interface

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

// Once we initiate an interface, we can use it anywhere we expect those key value pairs to be.

const printVehicle2 = (vehicle: Vehicle): void => {
	console.log(`name: ${vehicle.name}`);
	console.log(`year: ${vehicle.year}`);
	console.log(`broken: ${vehicle.broken}`);
};

printVehicle2(oldCivic);

const oldCherokee = {
	name: 'civic',
	year: 2000,
	broken: 1,
};

// As you can see below, TS will throw an error if the object doesnt satisfy each type in the interface.
printVehicle2(oldCherokee);

// We are not limited to primitive objects

interface Vehicle2 {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

const oldAccord = {
	name: 'accord',
	year: 2000,
	broken: false,
	summary(): string {
		return `Name:${this.name}`;
	},
};

const printVehicle3 = (vehicle: Vehicle2): void => {
	console.log(vehicle.summary());
};

printVehicle2(oldAccord);

// if the object satisfies each type in the interface, then typescript wont throw an error. This includes objects that have more that what is necessary.

// Example

interface Reportable {
	summary(): string;
}

const oldDurango = {
	name: 'durango',
	year: 2000,
	broken: false,
	summary(): string {
		return `Name:${this.name}`;
	},
};

const drink2 = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldDurango);
printSummary(drink2);
