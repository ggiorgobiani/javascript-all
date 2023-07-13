


const password = document.getElementById('pass');
const icon = document.getElementById('icon');

icon.addEventListener('click', function() {
  if (password.type === 'password') {
    password.type = 'text';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
    icon.style.color = 'green';
    
  } else {
    password.type = 'password';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
    icon.style.color = 'red';
  }
});