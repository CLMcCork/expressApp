//recipe: 
//1. npm install express
//2. require express in file 
const express = require("express"); 

//3. execute express by saving to a variable (usually called "app")
const app = express ();

//call methods on "app" include .listen which starts the server 
//req = request res = response --these are both obj made by express 
// app.use((req, res) => {
//     console.log("NEW REQUEST!!!")
//     //res.send("Yay! We got your request!! This is a response!")
//     //res.send({color: "red"}) //this is an object 
//     res.send("<h1>Hello World!</h1>") //this creates html in the browser
// })

app.get("/", (req, res) => {
    res.send("This is the home page!!!!!!!")
})

//adding path params: 
//http://localhost:3000/r/cats   ***the : indicates a variable 
app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

//multiple params r/something/somethingElse 
app.get("/r/:subreddit/:postId", (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post("/cats", (req, res) => {
    res.send("POST REQUEST to /cats! This is different than a GET request!")
} )

app.get("/cats", (req, res) => {
    res.send("Meow!!")
})

app.get("/dogs", (req, res) => {
    res.send("Woof!!")
})

//adding query strings 
app.get("/search", (req, res) => {
    const {q} = req.query;
    if(!q) {
        res.send("Nothing found if nothing searched!")  //http://localhost:3000/search --no query (no q)
    }
    res.send(`<h1>Search results for: ${q}!</h1>`)
})

//the * is everything else (like if someone mistyped, i.e. ;alkdjf;laksdjf)
app.get("*", (req, res) => {
    res.send(`I don't know that path!`)
})


//adding routes: 
// /cats => "meow"
// /dogs => "woof"
// "/" === "Welcome to the home page!" (root)

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})

