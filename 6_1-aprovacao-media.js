function calculo_Aprovacao(nota1, nota2, nota3){
    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);
    var media = (nota1 + nota2 + nota3) / 3;
    // Uso do operador de atribuição "=" para determinar qual é o valor da variável n_final

    var situacao = media >= 7.0 ? "Aprovado" : "Reprovado";
    // Uso do operador ternário para determina a situação do aluno com base na sua média

    if (situacao === "Aprovado"){
        document.write("<br>Você foi APROVADO com média: " + media);
    }

    else if (situacao === "Reprovado"){
        document.write("<br>Você foi REPROVADO com média: " + media);
    }
}

alert("====== SISTEMA DE CHECAGEM DE APROVAÇÃO ======")
document.write("<h2>====== SISTEMA DE CHECAGEM DE APROVAÇÃO ====== </h2>");

var n1 = window.prompt("Digite a sua primeira nota: "); document.write("<br>Sua primeira nota foi: " + n1);
var n2 = window.prompt("Digite a sua segunda nota: "); document.write("<br>Sua segunda nota foi: " + n2);
var n3 = window.prompt("Digite a sua terceira nota: "); document.write("<br>Sua terceira nota foi: " + n3);

var aprovacao = calculo_Aprovacao(n1, n2, n3)