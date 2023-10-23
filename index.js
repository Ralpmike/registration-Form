// DELETE 
// find the index of the item 
// / check if the index exist 
// remove the index from the array

// USERS


const USERS = [];
let FormEl = document.forms[0]
let butn = document.querySelector('button')
let fullname = document.getElementById('fullname').value;
let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;


FormEl.addEventListener('submit', function(e){
    e.preventDefault();

    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries())

    addUser(data)
    FormEl.reset()
})

// function submitUser(){

//     function Obj(fullname, username, email, password ) {
//         this.fullname = fullname;
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     let userDetails = new Obj(fullname,username, email, password);
//     console.log(userDetails)
//     // USERS.push(userDetails)
// }

    



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



function addUser(user) { //user{username, phone,name,...}
    // let index = USERS.findIndex((item) => item.username == user.username);
    // if (index >= 0) { return }
    //perform validation
    USERS.push(user);    
}