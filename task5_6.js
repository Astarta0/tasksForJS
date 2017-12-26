/* task6 */

function partialAny (fn, args) {

    var arrayArgBind = Array.prototype.slice.call(arguments, 1);

    return function () {
        var args = Array.prototype.slice.call(arguments);

        args.forEach((currentValueToInsert, InsertedIndex, arrayToInsert) => {
            arrayArgBind.forEach((valueinner, indexinner) => {

                if (valueinner === undefined){
                    var InsertValue = arrayToInsert.splice(InsertedIndex, 1);
                    arrayArgBind.splice(indexinner, 1, InsertValue[0])
                }
            });

        });

        return fn.apply(null, arrayArgBind);
    };
}

function test7(a, b, c, d, e, f, g) { return 'a=' + a + ',b=' + b + ',c=' + c + ',d=' + d + ',e=' + e + ',f=' + f + ',g=' + g; }
function test3(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }

var test2_5_for7 = partialAny(test7, 1, undefined, 3, 4, undefined, 6, 7 );
console.log(test2_5_for7(2, 5));

var test1_3 = partialAny(test3, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3

/* task5 */

function partial (fn, args) {

    var arrayArgBind = Array.prototype.slice.call(arguments, 1);

    return function () {
        var args = Array.prototype.slice.call(arguments);
        var arrayResult = arrayArgBind.concat(args);
        return fn.apply(null, arrayResult);
    };
}



function add(a, b) { return a + b; }
function mult(a, b, c, d) {
    debugger;
    return a * b * c * d; }

var add5 = partial(add, 5);

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6

var add9 = partial(add, 9);
console.log(add9(2));