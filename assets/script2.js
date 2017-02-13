var keys = document.querySelectorAll('button');

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(){
		var screen = document.getElementById('screen');
		var screenValue = screen.innerHTML;
		var btnValue = this.innerHTML;

		if (btnValue === 'C') {
			screen.innerHTML = '';
		}

		else if (btnValue === '=') {
			screenValue = screenValue.replace(/x/, '*').replace(/÷/, '/');
			screen.innerHTML = eval(screenValue);
		}

		else {
			screen.innerHTML += btnValue;
		}
	}
}