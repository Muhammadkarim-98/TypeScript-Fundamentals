// SIMPLE FN IN TYPESCRIPT
function firstEl(arr: any[]) {
  return arr[0];
}
const number = [1, 2, 3, 4];
const fn1 = firstEl(number);
console.log(fn1);

const str = ["row", 890];
const fn2 = firstEl(str);
console.log(fn2);

// SIMPLE object IN TYPESCRIPT
let obj: { name: string; age: number; surname: string };
obj = { name: "John", age: 26, surname: "Sam" };
console.log(obj);

// FUNCTION IN TS
function add(a: number, b: number): number {
  return a + b;
}
add(add(10, 10), 10);

// OPTIONAL PROPERTIES
function printCar(car: { model: string; year: number; make: string; voltage?: number }) {
  let str = `About my car: ${car.model}, ${car.year}, ${car.year}`;
  car.voltage;

  if (typeof car.voltage !== "undefined") {
    str += ` ${car.voltage}v`;
  }
  return str;
}

// THIS CODE GIVES ERROR BECAUSE 'color' does not exist in type!
console.log(printCar({ model: "Tesla Y", year: 2005, make: "Tesla", voltage: 220, color: "red" }));

// THIS CODE WORKS BECAUSE 'COLOR' VALUE HOLDEN INTO ANOTHER VARIABLE
const superCar = { model: "Tesla Y", year: 2005, make: "Tesla", voltage: 220, color: "red" };
console.log(printCar(superCar));

// ARRAY
let object = { item1: [], item2: [] };
object = { item1: [89, 1], item2: [9010, 100] };
console.log(object);

// TUPLE
let myCar: [string, number, number];
myCar = [100, 34, "oops"]; // Type 'number' is not assignable to type 'string'.
myCar = ["oops", 34, 21, 23]; //  Source has 4 element(s) but target allows only 3. (LIMITATION)

// UNION TYPE
let value: number | string[];
value = 77; // OK
value = ["work"]; // OK
