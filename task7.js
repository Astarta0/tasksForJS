// напиши функцию bind, которая позволяет привязать контекст (значение this) к функции:

var globalObject = (function (){return this;})();
globalObject.x = 1;
var ctx = { x: 2 };

function testThis(a) {
    console.log("x=" + this.x + ", a=" + a);
}
// console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100

function bind(fn, context){
    console.log(context);

    return function (a) {
        return fn.call(context, a);
    };

}