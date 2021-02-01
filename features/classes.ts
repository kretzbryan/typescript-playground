// Classes

// class Vehicle {
// 	drive(): void {
// 		console.log('chugga chugga');
// 	}
// 	honk(): void {
// 		console.log('Beep!');
// 	}
// }

// class Car extends Vehicle {
// 	drive(): void {
// 		console.log('vrroooooooommmm!');
// 	}
// }

// const car1 = new Car();

// car1.drive(); // console.log('vrroooooooommmm!')
// car1.honk(); // console.log('Beep!')

// Instance Method Modifiers
// Used to restrict class variables and class methods.

// Public
// This method can be called anywhere, any time.

// class Vehicle {
// 	public drive(): void {
// 		console.log('chugga chugga');
// 	}
// 	public honk(): void {
// 		console.log('Beep!');
// 	}														// -This public is set by default, so this doesnt change how its ran.
// }

// class Car extends Vehicle {
// 	public drive(): void {
// 		console.log('vrroooooooommmm!');
// 	}
// }

// Private
// This method can only be called by other methods in this class.

// class Vehicle {
// 	honk(): void {
// 		console.log('Beep!');
// 	}
// }

// class Car extends Vehicle {
// 	private drive(): void {
// 		console.log('vrroooooooommmm!'); //  <------- setting methods and variables to private will restrict its use to that Class. Ex. startDrivingProcess() is calling drive()
// 	}
// 	startDrivingProcess(): void {
// 		this.drive;
// 	}
// }

// const car1 = new Car();

// car1.startDrivingProcess(); // console.log('vrroooooooommmm!')
// car1.honk(); // console.log('Beep!')

// Protected
// This method can be called by other methods in this class, or by other methods in child classes.

class Vehicle {
	constructor(public color: string) {}

	protected honk(): void {
		console.log('Beep!');
	}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
	private drive(): void {
		console.log('vrroooooooommmm!');
	}
	startDrivingProcess(): void {
		this.drive;
		this.honk;
	}
}

const car1 = new Car();

car1.startDrivingProcess(); // console.log('vrroooooooommmm!')
car1.honk(); // console.log('Beep!')
