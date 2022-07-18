function det_Notas (nota1, nota2){
    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    var soma = (nota1 + nota2);
    var nota_faltante = (21 - soma);

    if (nota_faltante > 10.0){
        document.write('<br>Você está reprovado por média');
    }

    else{
        document.write('<br>Você deve tirar no mínimo: ' + nota_faltante);
    }
}

alert("====== SISTEMA DE CÁLCULO DE NOTAS ======")
document.write("<h2>====== SISTEMA DE CÁLCULO DE NOTAS ====== </h2>");

var n1 = window.prompt("Digite a sua primeira nota: "); document.write("<br>Sua primeira nota foi: " + n1);
var n2 = window.prompt("Digite a sua primeira nota: "); document.write("<br>Sua segunda nota foi: " + n2);

n3 = det_Notas(n1, n2);