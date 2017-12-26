function sequence(start, step){
    step = step || 1;
    start = start || 0;

    var count = 0;

    function generator(){
        if(!count) {
            ++count;
            return start
        } else {
        ++count;
        start = start + step;
        return start;
        }
    }
    return generator;
}

function take(gen, x){
    var resultsArray = [];
    for ( var i=0; i < x; i++ ){
        resultsArray[i] = gen();
    }
    return resultsArray;
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]