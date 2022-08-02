/* Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem:
conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e 
número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta. */
const prompt = require("prompt-sync")({sigint: true}); //Permite fazer inputs no CMD/PowerShell

function Banco (conta, saldo, tipo_conta, agencia){
    this.conta = conta;
    this.saldo = parseInt(saldo);
    this.tipo_conta = tipo_conta;
    this.agencia = agencia;

    buscarSaldo = function mostrarSaldo(){
        console.log(`A operação foi realizada com sucesso. 
        O seu saldo é: ${saldo}.`);
    }

    deposito = function depositar(){
        valor = prompt(`Digite o quanto você deseja depositar: `);
        valor = parseInt(valor);
        novo_saldo = saldo + valor;
        console.log(`A operação foi realizada com sucesso. 
        Saldo atual: ${novo_saldo}.`);
    }

    saque = function sacar(){
        valor = prompt(`Digite o quanto você deseja sacar: `);
        valor = parseInt(valor); 
        novo_saldo = saldo - valor;
        console.log(`A operação foi realizada com sucesso. 
        Saldo atual: ${novo_saldo}.`);
    }

    mostrarConta = function checar(){
        console.log(`Operação realizada com sucesso.
        O número da sua conta é: ${conta}.`);
    }
}

var saldo_atual = 15000;
var conta_atual = `12345`;
var tipo_conta_atual = `corrente`;
var agencia_atual = `0001`;

confBanco = new Banco(conta_atual, saldo_atual, tipo_conta_atual, agencia_atual);

const nome = prompt(`Qual é o seu nome? `);

console.log(`Bem-vindo(a), ${nome}.
Digite 1 para: ver o saldo.
Digite 2 para: depósito.
Digite 3 para: sacar.
Digite 4 para: verificar o número da conta.
Digite 5 para finalizar a sessão.`);

var operacao = prompt(`Qual operação você deseja realizar? `);

operacao = parseInt(operacao);

if (operacao == 1){
    buscarSaldo(saldo_atual);
}

else if (operacao == 2){
    deposito(saldo_atual);
}

else if (operacao == 3){
    saque(saldo_atual);
}

else if (operacao == 4){
    mostrarConta(conta_atual);
}

else{
    console.log(`Sessão encerrada com sucesso.`)
}





