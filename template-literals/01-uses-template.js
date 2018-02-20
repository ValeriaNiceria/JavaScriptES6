const ireland = {
	live: 'Dublin',
	love: 'Galway'
};

const text = 'Eu moro em ' +ireland.live+ ' e sou apaixonado por ' +ireland.love+ '!';
console.log(text);

//Template Litels
const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}!`;
console.log(newText);


const fruits = 'banana'
				+ '\n'
				+'orange'
				+ '\n'
				+ 'apple';
console.log(fruits);

//Template Litels
const newFruits = 
`Banana
Orange
Apple`;
console.log(newFruits);
