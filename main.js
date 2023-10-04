const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);

    const user = {
      name: nameInput.value,
      email: emailInput.value,
    };

    const userJSON = JSON.stringify(user);

    localStorage.setItem('user', userJSON);

    const storedUserJSON = localStorage.getItem('user');

    const storedUser = JSON.parse(storedUserJSON);

console.log(storedUser.name);
    nameInput.value = '';
    emailInput.value = '';
  }
}
