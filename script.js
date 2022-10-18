
let display = document.querySelector('.display h2');
let addition = document.querySelector('.add');
let numbers = [];
display.textContent = 0;

function add(arr) {
    const result = arr.reduce((accumulator ,currVal) => { 
        return accumulator + currVal; 
    },0);
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
    return operator([num1, num2]);
}

function setUp() {
    num1 = numbers.join('');
    console.log('numbers: ',num1);
}
setUp();

function displayNumbers() {
    let btnValue = document.querySelectorAll('div.numbers-container button');
    btnValue.forEach(btn => btn.addEventListener('click', () => {
        if(btn.textContent !== 'C' && btn.textContent !== 'blank') {
            numbers.push(Number(btn.textContent));
            console.log(btn.textContent);
            display.textContent = numbers.join('');
        } else if(btn.textContent === 'C') {
            numbers.splice(0,numbers.length);
            display.textContent = 0;
        }
    }));
}
displayNumbers();

addition.addEventListener('click', setUp);