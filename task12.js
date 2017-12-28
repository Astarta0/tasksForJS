/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    // обязательные свойства конкретного гамбургера
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
}

/* Константы: Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = 'small';
Hamburger.SIZE_LARGE = 'large';
Hamburger.STUFFING_CHEESE = 'cheese';
Hamburger.STUFFING_SALAD = 'salad';
Hamburger.STUFFING_POTATO = 'potato';
Hamburger.TOPPING_MAYO = 'mayonnaise';
Hamburger.TOPPING_SPICE = 'spices';


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
    debugger;
}


/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping){
    let toppingsSet = new Set(this._toppings);
    if (toppingsSet.has(topping)){
        toppingsSet.delete(topping);
        this._toppings = Array.from(toppingsSet);
    }
}


/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function (){
    debugger;
    return this._toppings.join(',');
}

let gamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
gamburger.addTopping(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE);
// gamburger.removeTopping(Hamburger.TOPPING_MAYO);
console.log("Have toppings:", gamburger.getToppings());