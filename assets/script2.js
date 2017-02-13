var keys = document.querySelectorAll('button');

for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(){
		var screen = document.getElementById('screen');
		var btnValue = this.innerHTML;

		if (btnValue === 'C') {
			screen.innerHTML = '';
		} else {
			screen.innerHTML += btnValue;
		}
	}
}