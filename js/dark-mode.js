var modeButton = document.getElementById('js-dark-mode');
var modeLabel = document.getElementById('js-mode-label');
var mode = localStorage.getItem('mode');

function changeMode() {
	document.body.classList.toggle('dark');

	if (document.body.classList.contains('dark')) {
		modeLabel.innerText = 'Light Mode'
		localStorage.setItem('mode', 'dark');
	} else {
		modeLabel.innerText = 'Dark Mode'
		localStorage.setItem('mode', 'light');
	}
}

function checkMode() {
	if (mode) {
		if (mode == 'dark') {
			document.body.classList.add('dark');
			modeLabel.innerText = 'Light Mode';
		} else {
			document.body.classList.remove('dark');
		}
	}
}

checkMode();

modeButton.addEventListener('click', changeMode);