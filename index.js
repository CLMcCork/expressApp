//recipe: 
//1. npm install express
//2. require express in file 
const express = require("express"); 

//3. execute express by saving to a variable (usually called "app")
const app = express ();

//call methods on "app" include .listen which starts the server 
app.use(() => {
    console.log("NEW REQUEST!!!")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})

