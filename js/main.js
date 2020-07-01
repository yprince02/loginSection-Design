const inputs = document.querySelectorAll(".input");

let checkBox = document.querySelector('.check');
let loginBtn = document.querySelector('.btn');
let id = document.querySelector('.input');
let pass = document.querySelector('.password');
let FPass = document.querySelector('.forgot-pass');
let login = () => {
	if (id.value.length != 0 && pass.value.length >= 3) {
		FPass.style.color = '#333';
		FPass.textContent = 'Forgot Password?';
		if (!checkBox.checked) {
			id.value = null;
			pass.value = null;
		}

	} else {
		FPass.style.color = 'red'
		FPass.textContent = 'Please enter valid details';
	}
};
