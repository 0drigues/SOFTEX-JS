function calculadora(num1, num2){
    var num1, num2;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (op === "+"){
        soma = (num1, num2) => {return num1 + num2};
    }

    else if (op === "-"){
        subtrac = (num1, num2) => {return num1 - num2};
    }

    else if (op === "*"){
        multipl = (num1, num2) => {return num1 * num2};
    }

    else if (op === "/"){
        div = (num1, num2) => {return num1 / num2};
    }
}

var num1, num2, op, resultado_final;
num1 = window.prompt("Digite o primeiro valor: ");
num1 = parseInt(num1);
num2 = window.prompt("Digite o segundo valor: ");
num2 = parseInt(num2);
op = window.prompt("Digite a operação desejada: +, -, * ou /");

resultado_final = calculadora(num1, num2);

document.write("Resultado da operação: ", + resultado_final);