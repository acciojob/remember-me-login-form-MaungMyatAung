//your JS code here. If required.
const form = document.getElementById('logingForm');
const userNameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const rememberCheckBox = document.getElementById('rememberMe');
const existUserBtn =  document.getElementById('existingUser');

const saveUser = localStorage.getItem('username');
const savePassword = localStorage.getItem('password');

if(saveUser && savePassword){
	userNameInput.value = saveUser;
	passwordInput.value = savePassword;
	rememberCheckBox.checked = true;
	existUserBtn.style.display = 'block';
}

form.addEventListener('submit', (event) =>{
	event.preventDefault();

	const username=userNameInput.value;
	const password=passwordInput.value;

	if (username === 'your_username' && password === 'your_password') {
		alert('Logged in as ' + username);

		if (rememberCheckBox.checked) {
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
		}else{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
	}else{
		alert('Invalid username or password')
	}

	existUserBtn.addEventListner('click', ()=> {
		alert('Logged in as'+ saveUser)
	})
})










