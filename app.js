console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response")
const app = express();
//MongoDB chaqirish
const { db } = require("./server");
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8",(err,data) => {
if(err){
    console.log("ERROR:", err);
} else {
    user = JSON.parse(data);
}
});
//1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//2: Session code
//3: Views code
app.set("views","views");
app.set("view engine", "ejs");

//4: Routing code

// app.get("/hello",function(req, res){
//     res.end(`<h1 style="background: yellow">HELLO WORLD by Michael</h1>`);
// });
// app.get("/gift",function(req, res){
//     res.end(`<h1 style="background: yellow">Siz sovgalar bo'limidasiz</h1>`);
// });
app.post("/create-item", (req, res) =>{
console.log(req.body);
res.end("succes")
// res.json({test:"success"})
});
app.get("/",function(req, res){
    db.collection("plans").find().toArray(function(err,data){
        if(err){
            console.log(err);
            res.end("something went wrong");
        }else {
                console.log(data);
                res.render("reja");
            }
    }); 
res.render("reja");
});
app.get('/author',(req, res) => {
 res.render("author", {user:user});
});

module.exports = db;

