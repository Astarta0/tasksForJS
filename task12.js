/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    try {
        debugger;
        // обязательные свойства конкретного гамбургера
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];


    } catch (err){

    }
}

/* Константы: Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'large';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato';
Hamburger.TOPPING_MAYO = 'mayonnaise';
Hamburger.TOPPING_SPICE = 'spices';

Hamburger.CostCaloriesCollection = [
    [
        {
            'size': Hamburger.SIZE_SMALL,
            'cal': 20,
            'cost': 50
        },
        {
            'size': Hamburger.SIZE_LARGE,
            'cal': 40,
            'cost': 100
        }
    ],
    [
        {
            'stuffing': Hamburger.STUFFING_CHEESE,
            'cal': 20,
            'cost': 10
         },
        {
            'stuffing': Hamburger.STUFFING_SALAD,
            'cal': 5,
            'cost': 20
        },
        {
            'stuffing': Hamburger.STUFFING_POTATO,
            'cal': 10,
            'cost': 15
        }
    ],
    [
        {
            'topping': Hamburger.TOPPING_SPICE,
            'cal': 0,
            'cost': 15
        },
        {
            'topping': Hamburger.TOPPING_MAYO,
            'cal': 5,
            'cost': 20
        }
    ]
];

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping){
    let toppingsArr = Array.from(arguments);
    this._toppings = Array.from(new Set(toppingsArr));
}

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping){
    if (this._toppings.indexOf(topping) >= 0){
            this._toppings.splice(this._toppings.indexOf(topping), 1);
    }
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function (){
    return this._toppings.join(',');
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function (){
    return this._size;
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function (){
    return this._stuffing;
}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function (){
    let price = 0;
    debugger;

    // price by size
    Hamburger.CostCaloriesCollection[0].forEach((object) => {
        if (object['size'] === this._size){
            price = price + object['cost'];
        }
    });
    // price by stuffing
    Hamburger.CostCaloriesCollection[1].forEach((object) => {
        if (object['stuffing'] === this._stuffing){
            price = price + object['cost'];
        }
    });
    // price by topping
    if (this._toppings){
        this._toppings.forEach((topping) => {
            Hamburger.CostCaloriesCollection[2].forEach((object) => {
                if (object['topping'] === topping){
                    price = price + object['cost'];
                }
            });
        });
    }
    return price;
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function (){
    let calories = 0;

    // calories by size
    Hamburger.CostCaloriesCollection[0].forEach((object) => {
        if (object['size'] === this._size){
            calories = calories + object['cal'];
        }
    });
    // calories by stuffing
    Hamburger.CostCaloriesCollection[1].forEach((object) => {
        if (object['stuffing'] === this._stuffing){
            calories = calories + object['cal'];
        }
    });
    // calories by topping
    if (this._toppings){
        this._toppings.forEach((topping) => {
            Hamburger.CostCaloriesCollection[2].forEach((object) => {
                if (object['topping'] === topping){
                    calories = calories + object['cal'];
                }
            });
        });
    }
    return calories;
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException () {}

let gamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
gamburger.addTopping(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE);
gamburger.removeTopping(Hamburger.TOPPING_MAYO);
console.log("Have toppings:", gamburger.getToppings());
console.log("Price: %f", gamburger.calculatePrice());
console.log("Calories: %f", gamburger.calculateCalories());


let gamburger1 = new Hamburger(Hamburger.TOPPING_SPICE,Hamburger.TOPPING_SPICE );
let gamburger2 = new Hamburger() ;
