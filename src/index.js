class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
    let ataque;
    	switch(this.tipo){
        case 'Mago':
            ataque = "Magia";
            break;
        case 'Guerreiro':
            ataque = "Espada";
            break;
        case 'Monge':
            ataque = "Artes Marciais";
            break;
        case 'Ninja':
            ataque = "Shuriken";
            break;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }

}



const heroOne = new Hero("Artorias", 300, "Guerreiro");
heroOne.atacar();

const heroTwo = new Hero("Antares", 1000, "Mago");
heroTwo.atacar();