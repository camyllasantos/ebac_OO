function Animal(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
}

function Cachorro(nome, especie, idade) {
    Animal.call(this, nome,especie, idade)
}

function Cavalo(nome, especie, idade) {
    Animal.call(this, nome,especie, idade)
}

function Gato(nome, especie, idade) {
    Animal.call(this, nome,especie, idade)
}

const cachorro = new Cachorro("Rex", "Golden", 2)
const cavalo = new Cavalo("Maximun", "Mangalarga Marchador", 5)
const gato = new Gato("Luther", "Maine Coon", 9)

console.log(cachorro);
console.log(cavalo);
console.log(gato);