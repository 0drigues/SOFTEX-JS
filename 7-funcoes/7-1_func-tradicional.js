function boasVindas(){
    var nome;
    nome = window.prompt("Digite o seu nome: ");
    document.write("Olá, " + nome, ". <br>Seja muito bem-vindo(a)!");
}

function calculadora(){
    var num1;
    var num2;
    alert("Agora, vamos realizar algumas operações matemáticas simples: ");
    document.write("<br><hr>")
    num1 = window.prompt("Digite o primeiro número: ");
    num1 = parseInt(num1);
    num2 = window.prompt("Digite o segundo número: ");
    num2 = parseInt(num2);
    document.write("<br>Suas operações:")
    document.write("<br>A soma dos dois números é: ", num1 + num2);
    document.write("<br>A diferença entre os dois números é: ", Math.abs(num1 - num2));
    document.write("<br>O produto dos dois números é: ", num1 * num2);
    document.write("<br>O quociente dos dois números é: ", num1 / num2);
    document.write("<br>Fim :)");
}

document.write("<h2> MENSAGEM DE BOAS-VINDAS E CALCULADORA </h2>");

boasVindas();
calculadora();