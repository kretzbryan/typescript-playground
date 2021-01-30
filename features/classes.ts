// Classes

class Vehicle {
	drive(): void {
		console.log('chugga chugga');
	}
	honk(): void {
		console.log('Beep!');
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log('vrroooooooommmm!');
	}
}

const car1 = new Car();

car1.drive();
car1.honk();

// Instance Method Modifiers

// Public
// THis method can be called anywhere, any time.

// Private
// This method can only be called by other methods in this class.

// Protected
// This method can be called by other methods in this class, or by other methods in child classes.
