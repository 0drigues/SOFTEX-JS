/* Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.
*/

function Carro(fabricacao, marca, modelo){      //objeto
    this.fabricacao = fabricacao;
    this.marca = marca;
    this.modelo = modelo;
}

fab = '1979';
mar = 'Chevrolet';
mod = 'Camaro';
donos = ['José', 'João', 'Pedro', 'Tiago'];     //vetor

meuCarro = new Carro(fab, mar, mod);

console.log(`
O carro designado é um ${fab} ${mar} ${mod}
`);

console.log("Essas propriedades correspondem, respectivamente, a: \n");

for (const prop in meuCarro){       //listagem de propriedades do objeto (Carro, meuCarro)
    console.log(`
    ${prop};`);
}

console.log("\nEste carro teve vários donos desde sua fabricação, foram eles: \n");

for (dono of donos){        //listagem de elementos do array
    console.log(`
    ${dono};`);
}