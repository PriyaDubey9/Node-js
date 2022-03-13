const express = require("express");
const faker = require("faker");
var bodyParser = require('body-parser')
const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views')
app.set('view engine', 'ejs')

var users = [];

for(let i =0; i<10; i++){
    users.push({
        name:  faker.name.findName(),
        email: faker.internet.email(),
        
    })
}

app.get("/", (req, res) => {
    res.render("index.ejs", {users});
})

app.get("/form", (req, res) => {
    res.render("form.ejs", {users});
})

app.post("/add/user", (req, res) =>{

    users.push({
        name: req.body.name,
        email: req.body.email,
        
    })
    res.redirect("/");
})

app.get("/user", (req, res) => {
    res.json({
        user :{
            name: req.query.name,
            age : req.query.age
        },
        status : "success",
        message: "Loooks Good"
    });
})

app.listen(3000, () => {
  console.log("Server is listning at port 3000");
})





