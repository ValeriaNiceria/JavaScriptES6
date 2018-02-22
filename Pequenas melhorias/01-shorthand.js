let firstName = 'Valéria';
let surname = 'Nicéria';
let age = 25;

const person = {
	firstName: firstName,
	surname: surname,
	age: age,
	hello: function(){
		console.log('Hello!');
	}
};

console.log(person);
person.hello();


//ES6 = Se a propriedade e a variável tiverem o mesmo nome - Shorthand Properties
const person2 = {
	firstName,
	surname,
	age,
	hello() {
		console.log('Hello...');
	}
}

console.log(person2);
person2.hello();