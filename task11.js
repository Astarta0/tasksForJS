// дан список вида «страна, город, население»:
//  Можешь взять оттуда первые 5-10 городов и перенести в код.
// Города в списке могут идти в произвольном порядке. Напиши программу,
// которая отберет и выведет N самых населенных городов по убыванию числа жителей.


let CitiList = [
    {
        'country': 'Япония',
        'city': 'Токио — Иокогама',
        'population': 37900
    },
    {
        'country': 'США',
        'city': 'Нью-Йорк',
        'population': 21445
    },    {
        'country': 'КНР',
        'city': 'Гуанчжоу — Фошань',
        'population': 19075
    },    {
        'country': 'США',
        'city': 'Лос-Анджелес',
        'population': 15500
    },    {
        'country': 'Нигерия',
        'city':  'Лагос',
        'population': 13360
    },    {
        'country': 'Мексика',
        'city': 'Мехико',
        'population': 20400
    }
];

function SortCity(citiesArray){
    let sortedPopulations = [];
    let result = [];
    citiesArray.forEach((city) => {
        if (city['population']) {
            sortedPopulations.push(city['population']);
        }
    });

    sortedPopulations.sort().forEach((populat) => {
        citiesArray.forEach((city) => {
            if (populat === city['population']) {
                result.push(city);
            }
        });
    });
    return result;
}

console.log(SortCity(CitiList));