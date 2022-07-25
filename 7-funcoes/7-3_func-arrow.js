document.write("<h1> CALCULADORA COM ARROW FUNCTIONS </h1>");
document.write("<br><hr>");

var num1, num2, op;

num1 = window.prompt("Digite o primeiro valor: ");
num1 = parseInt(num1);
num2 = window.prompt("Digite o segundo valor: ");
num2 = parseInt(num2);
op = window.prompt("Digite a operação desejada: +, -, * ou /");

if (op === "+"){
    var soma = (num1, num2) => {return resultado = num1 + num2};
    document.write("O resultado da soma é: ", num1 + num2);
}

else if (op === "-"){
    var subtrac = (num1, num2) => {return num1 - num2};
    document.write("O resultado da subtração é: ", num1 - num2);
}

else if (op === "*"){
    var multipl = (num1, num2) => {return num1 * num2};
    document.write("O resultado da multiplicação é: ", num1 * num2);
}

else {
    var div = (num1, num2) => {return num1 / num2};
    document.write("O resultado da divisão é: ", num1 / num2);
}

document.write("<br><br>Fim :)");
