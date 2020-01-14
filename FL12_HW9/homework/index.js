function convert(...args) {
    let result = [];

    for (let i of args) {
        if (typeof i === 'string') {
            result.push(parseInt(i))
        } else {
            result.push(`${i}`)
        }
    }

    return result;
}

function executeforEach(arr, func) {
    for (let item of arr) {
        func(item);
    }
}

function mapArray(arr, func) {
    let result = [];

    executeforEach(arr, el => result.push(func(parseInt(el))));

    return result;
}

function filterArray(arr, func) {
    let result = [];

    executeforEach(arr, el => {
        if (func(el)) {
            result.push(el);
        }
    });

    return result;
}

function flipOver(str) {
    let result = '';

    for (let char of str) {
        result = char + result;
    }

    return result;
}

function makeListFromRange(arr) {
    let result = [];

    for (let i = arr[0]; i <= arr[1]; i++) {
        result.push(i)
    }

    return result;
}

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

function getArrayOfKeys(obj, key) {
    let result = [];

    executeforEach(obj, el => result.push(el[key]));

    return result;
}

const FILTER_VALUE = 30

function substitute(arr) {
    return mapArray(arr, el => {
        if (el < FILTER_VALUE) {
            el = '*';
        }
        return el;
    })

}

const date = new Date(2019, 0, 2);

function getPastDay(date, days) {
    let myDate = new Date();

    myDate.setDate(date.getDate() - days);

    return myDate.getDate();
}

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${year}/${++month}/${day} ${hours}:${minutes}`
}