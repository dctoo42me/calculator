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