function calculadora(num1, num2, op){
    var num1, num2, op;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (op === "+"){
        resultado = num1 + num2;
        document.write("<br>A operação é: ", num1, " + ", num2);
        document.write("<br>O resultado da soma foi: ", resultado);
        return resultado;
    }

    else if (op === "-"){
        resultado = num1 - num2;
        document.write("<br>A operação é: ", num1, " - ", num2);
        document.write("<br>O resultado da subtração foi: ", resultado);
        return resultado;
    }

    else if (op === "*"){
        resultado = num1 * num2;
        document.write("<br>A operação é: ", num1, " * ", num2);
        document.write("<br>O resultado da multiplicação foi: ", resultado);
        return resultado;
    }

    else if(op === "/"){
        resultado = num1 / num2;
        document.write("<br>A operação é: ", num1, " / ", num2);
        document.write("<br>O resultado da divisão foi: ", resultado);
        return resultado;
    }

    else{
        document.write("<br>Operação inválida. Por favor, recarregue a página.");
    }
}

document.write("<h1> CALCULADORA SIMPLES </h1>")
document.write("<br><hr>")

var n1, n2, operacao;
n1 = window.prompt("Digite o primeiro valor: ");
n1 = parseInt(n1);
n2 = window.prompt("Digite o segundo valor: ");
n2 = parseInt(n2);
operacao = window.prompt("Digite a operação desejada: +, -, * ou /");

resultado_final = calculadora(n1, n2, operacao);
document.write("<br><br>Fim :)")