var keys = document.querySelectorAll('button');
var operators = ['+','x','÷','-'];

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(){
		var display = document.getElementById('display');
		var displayValue = display.innerHTML;
		var btnValue = this.innerHTML;

		//If C button is presssed, clear the screen
		if (btnValue === 'C') {
			display.innerHTML = '';
		}

		//If = button is pressed
		else if (btnValue === '=') {
			//Set variable for last character in the display
			var lastChar = displayValue[displayValue.length-1];
			//If last character in the display is an operator or decimal, remove it
			if (operators.indexOf(lastChar) !== -1 || lastChar === '.') {
				displayValue = displayValue.slice(0,-1);
			}
			//Replace 'x' and '÷' with mathematical operators, respectively '*' and '/'
			displayValue = displayValue.replace(/x/g, '*').replace(/÷/g, '/');
			//Evaluate the string contained in the display
			console.log(displayValue);
			//If display is not empty
			if (displayValue !== '') {
				display.innerHTML = eval(displayValue);
			}
		}

		//If an operator is pressed
		else if (operators.indexOf(btnValue) !== -1) {
			//Set variable for last character in the display
			var lastChar = displayValue[displayValue.length-1];
			//If display is not empty and the last character in the display is not an operator, add btnValue to display
			if (displayValue !== '' && operators.indexOf(lastChar) === -1) {
				display.innerHTML += btnValue;
			}
			//If display is empty and btnValue is -, add btnValue to display
			else if (displayValue === '' && btnValue === '-') {
				display.innerHTML += btnValue;
			}
		}

		//If other button is pressed, add button's innerHTML to the screen
		else {
			display.innerHTML += btnValue;
		}
	}
}