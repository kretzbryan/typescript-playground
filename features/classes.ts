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
