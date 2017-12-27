// Напиши функцию, считающую число свойств в объекте:
// Кстати, в новых браузерах с поддержкой Javascript ES5 есть метод Object.keys(x),
// возвращающий массив ключей у объекта.
var a = { a: 1, b: 2 };
console.log(count(a)); // 2
var b = function () {};
console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1

function count (object){
    return (Object.keys(object)).length;
}
