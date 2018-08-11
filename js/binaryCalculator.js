function runCalculator() {
    buildUI();
}

function buildUI(){
    let results = document.createElement('div');
    results.id = 'res';
    
    document.body.appendChild(results);
    
    let btns = document.createElement('div');
    btns.id = 'btns';
    
    document.body.appendChild(btns);
    
    let btn0 = document.createElement('button');
    btn0.id = 'btn0';
    btn0.className = 'btn';
    btn0.innerHTML = '0';
    btn0.addEventListener('click', displayToScreen);
    
    document.body.appendChild((btn0));
    
    let btn1 = document.createElement('button');
    btn1.id = 'btn1';
    btn1.className = 'btn';
    btn1.innerHTML = '1';
    btn1.addEventListener('click', displayToScreen);
    
    document.body.appendChild((btn1));
    
    let btnClr = document.createElement('button');
    btnClr.id = 'btnClr';
    btnClr.className = 'btn';
    btnClr.innerHTML = 'C';
    btnClr.addEventListener('click', clearScreen);
    
    document.body.appendChild((btnClr));
    
    let btnEql = document.createElement('button');
    btnEql.id = 'btnEql';
    btnEql.className = 'btn';
    btnEql.innerHTML = '=';
    btnEql.addEventListener('click', executeOperation);
    
    document.body.appendChild((btnEql));
    
    let btnSum = document.createElement('button');
    btnSum.id = 'btnSum';
    btnSum.className = 'btn';
    btnSum.innerHTML = '+';
    btnSum.addEventListener('click', displayToScreen);
    
    document.body.appendChild((btnSum));
    
    let btnSub = document.createElement('button');
    btnSub.id = 'btnSub';
    btnSub.className = 'btn';
    btnSub.innerHTML = '-';
    btnSub.addEventListener('click', displayToScreen);
    
    document.body.appendChild((btnSub));
    
    let btnMul = document.createElement('button');
    btnMul.id = 'btnMul';
    btnMul.className = 'btn';
    btnMul.innerHTML = '*';
    btnMul.addEventListener('click', displayToScreen);
    
    document.body.appendChild((btnMul));
    
    let btnDiv = document.createElement('button');
    btnDiv.id = 'btnMul';
    btnDiv.className = 'btn';
    btnDiv.innerHTML = '/';
    btnDiv.addEventListener('click', displayToScreen);
    
    document.body.appendChild((btnDiv));    
}

function displayToScreen() {
    let currentScreenValue = document.getElementById('res').innerHTML;
    
    document.getElementById('res').innerHTML = currentScreenValue + this.innerHTML;
}

function clearScreen() {
    document.getElementById('res').innerHTML = '';
}

function executeOperation() {
    let fullString = document.getElementById('res').innerHTML;
    
    if(fullString.indexOf('+') < 0 
        && fullString.indexOf('-') < 0
        && fullString.indexOf('*') < 0
        && fullString.indexOf('/') < 0) {
        return null;
    }
    
    let addOpIndex = fullString.indexOf('+');
    let subOpIndex = fullString.indexOf('-');
    let mulOpIndex = fullString.indexOf('*');
    let divOpIndex = fullString.indexOf('/');

    let result = 0;
    
    if(addOpIndex >= 0) {
        const operands = extractOperands(fullString, addOpIndex);
        result = performOperation(operands, '+');
    } else if(subOpIndex >= 0) {
        const operands = extractOperands(fullString, subOpIndex);
        result = performOperation(operands, '-');
    } else if(mulOpIndex >= 0) {
        const operands = extractOperands(fullString, mulOpIndex);
        result = performOperation(operands, '*');
    } else if(divOpIndex >= 0) {
        const operands = extractOperands(fullString, divOpIndex);
        result = performOperation(operands, '/');
    } else {
        return null;
    }
    
    document.getElementById('res').innerHTML = result.toString(2);
}

function extractOperands(fullString, operatorIndex) {
    let operator1 = fullString.slice(0, operatorIndex);
    let operator2 = fullString.slice(operatorIndex + 1);
    
    return [operator1, operator2];
}

function performOperation(operands, operator) {
    let base10Operator1 = parseInt(operands[0], 2);
    let base10Operator2 = parseInt(operands[1], 2);
    
    let result = 0;
    
    switch(operator) {
        case '+':
            result = base10Operator1 + base10Operator2;
            break;
        case '-':
            result = base10Operator1 - base10Operator2;
            break;
        case '*':
            result = base10Operator1 * base10Operator2;
            break;
        case '/':
            result = Math.floor(base10Operator1 / base10Operator2);
            break;
    }
    
    return result;
}