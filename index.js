// DELETE 
// find the index of the item 
// / check if the index exist 
// remove the index from the array

// USERS


let USERS = [];

//add to windows onload
jsonString = localStorage.getItem('value');
USERS = JSON.parse(jsonString||'[]')
console.log({USERS})

let FormEl = document.forms[0]

FormEl.addEventListener('submit', function(e){
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries())

    
    addUser(data)
    FormEl.reset()
})

function getAllUsers(){
    // USERS.forEach( (item) => console.log(item))

    return USERS
}
getAllUsers()


function checker(item, username) {
    return item.username == username;
}

function deleteUser(username) {
    // let index = USERS.findIndex((item)=>checker(item,username));
    let index = USERS.findIndex((item) => item.username == username);
    if (index >= 0) {
        USERS.splice(index, 1);
    }
}



function editUser(user) { //user{username, phone,name,...}
    let index = USERS.findIndex((item) => item.username == user.username);
    if (index < 0) { return }
    const currentData = USERS[index]
    //perform validation
    USERS[index] = { ...currentData, ...user }
}

function addToLocalStorage(){
    localStorage.setItem("value", JSON.stringify(USERS))
}

function addUser(user) { //user{username, phone,name,...}
    let index = USERS.findIndex((item) => item.username == user.username);
    if (index >= 0) { console.log(`This user ${user.username} exist`) }
    // perform validation
     
    USERS.push(user); 
    addToLocalStorage()
}
