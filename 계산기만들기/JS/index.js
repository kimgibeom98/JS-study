let oper ;
let num1 ;

const refucn = (ts) => {
    result.value += ts;
}

const cal = (symbol) => {
    num1 = document.getElementById('result').value;
    oper = symbol;
    return document.getElementById('result').value = "";
}

const opeven = () => {
    let num2 = document.getElementById('result').value;
    let result ;
    
    switch(oper){
        case '+' : result = Number(num1) + Number(num2)
        document.getElementById('result').value = result;
        break;
        case '-' : result = Number(num1) - Number(num2)
        document.getElementById('result').value = result;
        break;
        case '*' : result = Number(num1) * Number(num2)
        document.getElementById('result').value = result;
        break;
        case '/' : result = Number(num1) / Number(num2)
        document.getElementById('result').value = result;
        break;
    }
    num1 = result
}
const clear02 = () => {
    num1 = 0;
    return document.getElementById('result').value = "";
}

