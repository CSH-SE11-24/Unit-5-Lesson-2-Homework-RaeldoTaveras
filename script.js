// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storename ="csh store"

// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 

let user ={
  username:"Raeldo",
  password: "252612",
  status:"online"
};



// Task 3: Console log "[username] is [status]".
console.log(user.status)
console.log(user.password)
console.log(user.username + " is " + user.status)
// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess

let passwordGuess = prompt("enter your password")
console.log(" Hello "+ passwordGuess)

// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"


if(user=== "252612"){
  console.log("welcome"+ user.username)
  user.status = "online"
}else{
  console.log("wrong password")
  user.status = "offline"
}


// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 

let hoodieInventory ={
  name:"Taveras",
  Hoodie:"Nike",
  quantity:20,
  price:150
};


// Task 7: Console log "[name] costs [price]"
console.log(hoodieInventory.name + "costs" + hoodieInventory.price)

// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!
hoodieInventory.quantity--
console.log(hoodieInventory.quantity + hoodieInventory.name + "left in inventory")


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

