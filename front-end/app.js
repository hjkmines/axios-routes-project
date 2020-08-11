const url = "http://localhost:3000/users"
const form = document.querySelector('#new-user')
const updateForm = document.querySelector('#update-user')
const selectName = document.querySelector('#name-select')
const ul = document.querySelector('#list')
const httpRequest = new HttpRequests

function addUserToList(user) {
    const li = document.createElement('li')
    const $option = document.createElement("option")
    li.innerHTML = `
    <p>${user.name}</p>
    <button class="delete" onclick="setTimeout(() => window.location.reload(), 10)">Remove</button>
    <p hidden class='hidden'>${user.id}</p>` 
    ul.append(li)

    $option.innerText = user.name 
    $option.name = "name"
    $option.value = user.id 
    selectName.append($option)
}

//get users 
httpRequest.get(url)

//create user 
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const formData = new FormData(event.target)
    const name = formData.get('name')
    const username = formData.get('username')
    const email = formData.get('email')
    const user = {name, username, email}
    
    addUserToList(user)
    httpRequest.post(url, user)
}) 
  
// delete user 
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const userID = event.target.nextElementSibling.textContent
        const userURL = `http://localhost:3000/users/${userID}`
        event.target.parentElement.remove() 
        httpRequest.delete(userURL)
        }
    })

//update user 
updateForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = new FormData(event.target)
    const name = formData.get('name')
    const username = formData.get('username')
    const email = formData.get('email')
    const user = {name, username, email}
    const userID = formData.get('user-id')
    const userURL = `http://localhost:3000/users/${userID}`
    
    httpRequest.put(userURL, user)
}) 