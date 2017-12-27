// напиши функцию pluck, которая берет массив объектов и возвращает массив
// значений определенного поля: ['barney', 'fred']
var characters = [
    {'name': 'barney',
     'age': 36},
    {'name': 'fred',
     'age': 40}
];

console.log(pluck(characters, 'name'));
pluck(characters, 'name');

function pluck(array, keyValue){
    let valuesOfKeyFields = [];
    array.forEach((currentObject) => {
        for (let key in currentObject){
            if (key === keyValue){
                valuesOfKeyFields.push(currentObject[key]);
            }
        }
    });
    return valuesOfKeyFields;
}
