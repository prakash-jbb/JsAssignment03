const userMap = new Map();

// Add new user
function addUser(name, age, email) {
    let userInfo = { age, email }
    userMap.set(name, userInfo);
}
addUser("Prakash", 18, "abc@gmail.com")
addUser("Damodar", 18, "ayz@gmail.com")
console.log(userMap)

function updateUser(name, age, email) {
    if (userMap.has(name)) {
        const userInfo = userMap.get(name);
        userInfo["age"] = age;
        userInfo["email"] = email;
    }
}

updateUser("Prakash", 20, "xyz@gmail.com")
console.log(userMap)


function deleteUser(name) {
    userMap.delete(name);
}

deleteUser("Prakash")
console.log(userMap)