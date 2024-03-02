 
async function profile() {
 let responce =  await fetch(`${url}/api/user`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' , 'Authorization' : 'Bearer vw8qxBcKq18wlOH6'},
})
    .then(response => console.log(response))
    .catch(error => console.log(error))



    console.log(content)

}

profile();