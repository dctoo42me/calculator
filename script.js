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
let nextOperation;
let skipOp = false;
let result = '';
display.textContent = 0;

//operation functions
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

//produces result on the selected operation 
function operate(num1, num2, operator) {
    result = operator([num1, num2]);
    console.log('END OP num1:', num1, 'num2:', num2, operator, 'result:',result);
    display.textContent = Math.round(result);
}

//clear the numbers array
function numClear() {
    numbers.splice(0,numbers.length);
}

function clearAll() {
        numbers.splice(0,numbers.length);
        // display.textContent = 0;
        num1 = '';
        num2 = '';
        result = '';
        console.log('clear clicked, nums arr cleared, display cleared, num1 & num2 cleared');
}

//iterate over buttons and show selected numbers on display screen in ui
function displayNumbers() {
    let btnValue = document.querySelectorAll('div.numbers-container button');
    btnValue.forEach(btn => btn.addEventListener('click', () => {
        if(
            btn.textContent !== 'C' && 
            btn.textContent !== 'blank') {
            numbers.push(btn.textContent);
            display.textContent = Number(numbers.join(''));
            console.log('numbers pushed to array');
            // console.log('num1 type: ', typeof num1);
        } else if(
            btn.textContent === 'C') {
            numbers.splice(0,numbers.length);
            display.textContent = 0;
            num1 = '';
            num2 = '';
            result = '';
            console.log('clear clicked, nums arr cleared, display cleared, num1 & num2 cleared');
        }
    }));
}
displayNumbers();

//sets the operation based off of selected operator button class
function funcCheck(e) {
    let func;
    console.log('target', e.target);
    if(
        e.target.className === 'add') {
        console.log('PLUS');
        func = add;
    } else if(
        e.target.className === 'subtract') {
        console.log('MINUS');
        func = subtract;
    } else if(
        e.target.className === 'divide') {
        console.log('DIVIDE');
        func = divide;
    } else if(
        e.target.className === 'multiply') {
        console.log('MULTIPLY');
        func = multiply;
    }
    operation = func;
}

function nextFuncCheck(e) {
    let func;
    // console.log('target', e.target);
    if(
        e.target.className === 'equals') {
            return;
    } else if (
        e.target.className === 'add') {
        console.log('PLUS');
        func = add;
    } else if(
        e.target.className === 'subtract') {
        console.log('MINUS');
        func = subtract;
    } else if(
        e.target.className === 'divide') {
        console.log('DIVIDE');
        func = divide;
    } else if(
        e.target.className === 'multiply') {
        console.log('MULTIPLY');
        func = multiply;
    }
    nextOperation = func;
} 

//setup nums for operations
function operateOnNum1AndNum2() {
    console.log('2nd num1 and num2');
    if(
        operation !== undefined &&
        skipOp === false) {
            num2 = Number(numbers.join(''));
            console.log('*****initialized num2',num2);
            operate(num1,num2,operation);
            console.log('1 operation performed');
            num1 = result;
            result = '';
            num2 = '';
            operation = undefined;
            numClear();
            console.log('num arr cleared');
            console.log('num1:', num1, 'num2:', num2, 'result:', result);
        } else if(
            operation !== undefined &&
            nextOperation !== undefined ||
            skipOp === true) {
                num2 = Number(numbers.join(''));
                console.log('*****initialized num2',num2);
                operate(num1,num2,nextOperation);
                console.log('2 operation performed');
                num1 = result;
                result = '';
                num2 = '';
                nextOperation = undefined;
                skipOp = false;
                numClear();
                console.log('num arr cleared');
                console.log('num1:', num1, 'num2:', num2, 'result:', result);
        } else if(
            operation === undefined) {
                operation = nextOperation;
                nextOperation = undefined;
                num2 = Number(numbers.join(''));
                console.log('*****initialized num2',num2);
                operate(num1,num2,operation);
                console.log('next 3 operation performed');
                num1 = result;
                result = '';
                num2 = '';
                operation = undefined;
                numClear();
                console.log('num arr cleared');
                console.log('num1:', num1, 'num2:', num2, 'result:', result);
    } else { 
        console.log('SOMETHING WENT WRONG!');
    }
}

//initial path taken to setup initial operation
function initialSetup(func) {
    console.log('3rd initial');
    num1 = Number(numbers.join(''));
    console.log('*****initialized num1', num1);
    display.textContent = '';
    console.log('display cleared');
    numClear();
    console.log('num arr cleared');
}

//start operation with a function check and if statement
function operationStart(e) {
    // console.log(e.target.className, 'clicked');
    console.log('num1:', num1, 'num2:',num2, typeof num2, 'num arr:', numbers, 'result:', result);
    console.log('operation start');
    if( operation === divide ||
        nextOperation === divide &&
        num1 === 0 || num2 === 0) {
            display.textContent = `Can't do that!`;
            clearAll();
            return;
    }else if( 
        operation === undefined &&
        nextOperation === undefined &&
        num1 !== undefined && num1 !== '') {
            funcCheck(e);
            return;
    } else if(
        operation !== undefined &&
        nextOperation === undefined) { 
            console.log('checking for nextOp');
            nextFuncCheck(e);
            operateOnNum1AndNum2();
    } else if(
        operation === undefined &&
        nextOperation !== undefined ) { 
            console.log('running nextOp');
            skipOp = true;
            funcCheck(e);
            operateOnNum1AndNum2();
    } else if(
        num1 !== '' && num1 !== undefined &&
        numbers.length > 0) {
            console.log('num1 has value and num arr > 0');
            funcCheck(e);
            operateOnNum1AndNum2();
    } else { 
        funcCheck(e);
        // operation = func;
        console.log('RAN FUNC CHECK on ELSE');
    if(
        num1 !== undefined && num1 !== '') {
            //2nd
            operateOnNum1AndNum2();
        } else {
            //3rd
            initialSetup();
        }
    }
}

addition.addEventListener('click', operationStart);
division.addEventListener('click', operationStart);
multiplication.addEventListener('click', operationStart);
subtraction.addEventListener('click', operationStart);
equals.addEventListener('click', (e) => {
    if(
        num1 !== '' || num1 !== undefined &&
        numbers.length > 1) {
        console.log('first equals ran')
        num2 = Number(numbers.join(''));
        console.log('num1:', num1, 'num2:',num2, typeof num2, 'num arr:', numbers, 'result:', result);
        operationStart(e);
    }else { 
        console.log('second equals ran');
        num2 = Number(numbers.join(''));
        console.log('num2: ',num2);
        operate(num1,num2,operation);
        num1 = result;
        result = '';
        num2 = '';
        numClear();
        console.log('num1:', num1, 'num2:', num2, 'result:', result);
    }
});