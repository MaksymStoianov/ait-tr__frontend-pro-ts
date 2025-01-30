const age: number = 25;

const name: string = "Alice";

const isActive: boolean = true;

const nullableValue: string | null = null; // Строка или null

const numbers: number[] = [1, 2, 3, 4];

const names: string[] = ["Alice", "Bob", "Charlie"];

const mixed: (number | string)[] = [1, "Alice", 2, "Bob"];

const colors: (number | string | boolean)[] = [123, "red", true, "blue"];

const add = (a: number, b: number): number => {
	return a - b;
};

const logMessage = (message: string): void => {
	console.log(message);
};
