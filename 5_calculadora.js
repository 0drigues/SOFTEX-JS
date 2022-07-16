function calculadora (a, b, op){
    if (op === "+"){
        result = a + b;
        return result;}

    else if (op === "-"){
        result = a - b;
        return result;}

    else if (op === "*"){
        result = a * b;
        return result;}

    else if (op === "/"){
        result = a / b;
        return result;}
    
    else{
        write("Não foi possível calcular.");}
}

var a = 10;
var b = 5;
var op = "+";
var result = calculadora(a, b, op);

console.log("O resultado é" + result)