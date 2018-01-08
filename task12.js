/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
        debugger;
        if (!size || !stuffing) {
            throw new HamburgerException(`no size given`);
        }
        if (![Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE].includes(size)){
            throw new HamburgerException(`invalid size ${size}`);
        }
        if (![Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATO].includes(stuffing)){
            throw new HamburgerException(`invalid stuffing ${stuffing}`);
        }
        // обязательные свойства конкретного гамбургера
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (message) {
    let argArr = Array.from(arguments);
    Error.apply(this, argArr);
    this.message = message;
    this.name = "HamburgerException";

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
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
Hamburger.prototype.addTopping = function (){
    let toppingsArr = Array.from(arguments);
    toppingsArr.forEach((topping) => {
        if (this._toppings.includes(topping)){
            throw new HamburgerException(`duplicate topping ${topping}`);
        }
    });
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
    let isToppingExist = this._toppings.includes(topping);
    if (!isToppingExist){
        throw new HamburgerException('topping ${topping} doesnot exist');
    }
    if (isToppingExist){
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

let gamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
gamburger.addTopping(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE);
gamburger.removeTopping(Hamburger.TOPPING_MAYO);
console.log("Have toppings:", gamburger.getToppings());
console.log("Price: %f", gamburger.calculatePrice());
console.log("Calories: %f", gamburger.calculateCalories());

let gamburger1 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE );
let gamburger2 = new Hamburger();
// добавляем много добавок
let gamburger3 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
gamburger3.addTopping(Hamburger.TOPPING_MAYO);
gamburger3.addTopping(Hamburger.TOPPING_MAYO);