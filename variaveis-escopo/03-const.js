const secretNumber = 28;
// secretNumber = 2; //VAI APRESENTAR UM ERRO - POIS NÃO SE PODE MODIFICAR UMA VARIÁVEL CONSTANTE
console.log(secretNumber);

const will = {
    name: 'Willian',
    age: 40
}

console.log(will); //{ name: 'Willian', age: 40 }

will.age = 45;

console.log(will); //{ name: 'Willian', age: 45 }

//** Para transformar um objeto em imutável **//
Object.freeze(will);

will.name = 'Will';

console.log(will); //{ name: 'Willian', age: 45 }