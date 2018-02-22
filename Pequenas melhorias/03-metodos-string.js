let text = 'Lorem ipsum dolor sit amet';

console.log(text.startsWith('Lorem')); //Vai verificar se 'começa com()' -> true or false
console.log(text.startsWith('rem', 2)); //true

console.log(text.endsWith('amet')); //Vai verificar se 'termina com()' -> true or false
console.log(text.endsWith('ame', 25)); //true

console.log('lol '.repeat(3)); //lol lol lol

console.log(text.includes('dolor')); //Verifica se a string existe -> true or false