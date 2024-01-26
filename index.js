// SIMPLE FN IN TYPESCRIPT
function firstEl(arr) {
    return arr[0];
}
var number = [1, 2, 3, 4];
var fn1 = firstEl(number);
console.log(fn1);
var str = ["row", 890];
var fn2 = firstEl(str);
console.log(fn2);
// SIMPLE object IN TYPESCRIPT
var obj;
obj = { name: "John", age: 26, surname: "Sam" };
console.log(obj);
// FUNCTION IN TS
function add(a, b) {
    return a + b;
}
add(add(10, 10), 10);
// OPTIONAL PROPERTIES
function printCar(car) {
    var str = "About my car: ".concat(car.model, ", ").concat(car.year, ", ").concat(car.year);
    car.voltage;
    if (typeof car.voltage !== "undefined") {
        str += " ".concat(car.voltage, "v");
    }
    return str;
}
// THIS CODE GIVES ERROR BECAUSE 'color' does not exist in type!
console.log(printCar({ model: "Tesla Y", year: 2005, make: "Tesla", voltage: 220, color: "red" }));
// THIS CODE WORKS BECAUSE 'COLOR' VALUE HOLDEN INTO ANOTHER VARIABLE
var superCar = { model: "Tesla Y", year: 2005, make: "Tesla", voltage: 220, color: "red" };
console.log(printCar(superCar));
// ARRAY
var object = { item1: [], item2: [] };
object = { item1: [89, 1], item2: [9010, 100] };
console.log(object);
// TUPLE
var myCar;
myCar = [100, 34, "oops"]; // Type 'number' is not assignable to type 'string'.
myCar = ["oops", 34, 21, 23]; //  Source has 4 element(s) but target allows only 3. (LIMITATION)
// UNION TYPE
var value;
value = 77; // OK
value = ["work"]; // OK
//# sourceMappingURL=index.js.map