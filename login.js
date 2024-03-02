

const loginForm = document.querySelector('#form-login');

//login
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);

    let phone = formData.get('phone')
    let password = formData.get('password')

    fetch(`${url}/api/login`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ phone , password })
    })
        .then(response => console.log(response))
        .then(data => {localStorage.setItem('auth_token' , JSON.stringify(data.token))})
        .catch(error => console.log(error))
        console.log(localStorage.getItem('auth_token'))
})
