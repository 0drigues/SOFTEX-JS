function det_Notas (nota1, nota2){
    soma = nota1 + nota2;
    var restante = 21 - soma;

    if (restante >= 0){
        document.write("Você deve tirar: " + restante + " na próxima prova para ser aprovado com média 7.0");
    }
}

alert("====== SISTEMA DE CÁLCULO DE NOTAS ======")
document.write("<h2>====== SISTEMA DE CÁLCULO DE NOTAS ====== </h2>");

var n1 = write.prompt("Digite a sua primeira nota: ");
document.write("<br>Sua primeira nota foi: " + n1);
var n2 = write.prompt("Digite a sua primeira nota: ");
document.write("<br>Sua segunda nota foi: " + n2);

var n3 = det_Notas(n1, n2);

