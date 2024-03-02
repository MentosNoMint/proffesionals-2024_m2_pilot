


const url = 'https://3dd0-89-232-236-182.ngrok-free.app';

const form = document.querySelector('#my-form');


//register
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    let first_name = formData.get('name');
    let last_name = formData.get('lastName');
    let phone = formData.get('phone')
    let document_number = formData.get('document')
    let password = formData.get('password')

    fetch(`${url}/api/register`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ first_name, last_name, phone, document_number, password })
    })
        .then(response => console.log(response))
        .catch(error => console.log(error))
})

