	function hello(name, surname) {
		console.log(`Hello ${name} ${surname}! How are you?`);
	}

	hello('Valéria', 'Nicéria'); // Hello Valéria Nicéria! How are you?

	hello(); 
	//Se não declarar as propriedades, vai apresentar a seguinte msg = Hello undefined undefined! How are you?
	
	//Para resolver o problema no ES5
	function hello2(name, surname) {
		name = name ||'Vanessa';
		surname = surname || 'Silveira';
		console.log(`Hello ${name} ${surname}!`);
	}

	hello2(); //Hello Vanessa Silveira!



	//** Usando default parameters - ES6 **//

	function hello3(name = 'Vanessa', surname = 'Silveira') {
		console.log(`Hello ${name} ${surname}! What's up?`);
	}

	hello3(); //Hello Vanessa Silveira! What's up?

	hello3('Valéria', 'Nicéria'); //Hello Valéria Nicéria! What's up?
