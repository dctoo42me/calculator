let display = document.querySelector('.display h2');
//operation variables
let addition = document.querySelector('.add');
let division = document.querySelector('.divide');
let multiplication = document.querySelector('.multiply');
let subtraction = document.querySelector('.subtract');
let equals = document.querySelector('.equals');

let numbers = [];
let num1;
let num2;
let operation;
display.textContent;

function add(arr) {
    const result = arr.reduce((accumulator ,currVal) => { 
        return accumulator + currVal; 
    });
    return result;
}

function subtract(arr) {
    const result = arr.reduce((accumulator ,currVal) => { 
        return accumulator - currVal; 
    });
    return result;
}

function multiply(arr) {
    const result = arr.reduce((accumulator ,currVal) => { 
        return accumulator * currVal; 
    });
    return result;
}

function divide(arr) {
    const result = arr.reduce((accumulator ,currVal) => { 
        return accumulator / currVal; 
    });
    return result;
}

function operate(num1, num2, operator) {
    let result = operator([num1, num2]);
    console.log('result: ',result);
    display.textContent = result;
    numbers.splice(0,numbers.length);
    numbers.push(result);
}

function setUp() {
    num1 = Number(numbers.join(''));
    console.log('num1: ',num1);
    numbers.splice(0,numbers.length);
}

function displayNumbers() {
    let btnValue = document.querySelectorAll('div.numbers-container button');
    btnValue.forEach(btn => btn.addEventListener('click', () => {
        if(btn.textContent !== 'C' && btn.textContent !== 'blank') {
            numbers.push(btn.textContent);
            display.textContent = Number(numbers.join(''));
        } else if(btn.textContent === 'C') {
            numbers.splice(0,numbers.length);
            display.textContent = 0;
        }
    }));
}
displayNumbers();

addition.addEventListener('click', () => {
    display.textContent = '';
    operation = add;
    setUp();
})
division.addEventListener('click', () => {
    display.textContent = '';
    operation = divide;
    setUp();
})
multiplication.addEventListener('click', () => {
    display.textContent = '';
    operation = multiply;
    setUp();
})
subtraction.addEventListener('click', () => {
    display.textContent = '';
    setUp();
})

equals.addEventListener('click', () => {
    num2 = Number(numbers.join(''));
    console.log('num2: ',num2);
    operate(num1,num2,operation);
})