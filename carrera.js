class Dado {
    lanzarDado() {
        let cara = Math.ceil(Math.random() * 6);
        if (cara == 1) {
            return 3
        } else if (cara == 2 || cara == 3) {
            return 1
        } else if (cara == 4 || cara == 5 || cara == 6) {
            return 2
        }
    }
}
class Corredor {
    constructor(name) {
        this.name = name
        this.posicion = 0
        this.dado = new Dado
    }
    correr() {
        return this.posicion += this.dado.lanzarDado();
    }
}
let R = new Corredor('Rojo');
let A = new Corredor('Azul');
while (R.posicion < 100 && A.posicion < 100) {
    R.correr();
    A.correr();
    console.log(`La posicion del corredor rojo es ${R.posicion}`)
    console.log(`La posicion del corredor azul es ${A.posicion}`)
}
if (R.posicion >= 100 && A.posicion >= 100) {
    console.log('Ambos empataron');
} else if (R.posicion >= 100) {
    console.log(`${R.name} ganó`);
} else if (A.posicion >= 100) {
    console.log(`${A.name} ganó`);
}