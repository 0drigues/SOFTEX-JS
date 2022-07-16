const meuCarro = {
    name: "Chevrolet Onix",

    dirigir() {
        console.log("Olha só. Estou dirigindo!")
    },

    panico() {
         console.log("Pera aí, como eu paro essa coisa!?")
    },
};

//Usando Object.create para instancionar um novo carro:
const seuCarro = Object.create(meuCarro)

//Verificando que "seuCarro" foi criado a partir de "meuCarro", que é o protótipo neste caso
console.log(seuCarro.name)