console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require('http');
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
res.json({test:"success"})
});

app.get("/",function(req, res){
res.render("harid");
});

const server = http.createServer(app);
let PORT = 1005;
server.listen(PORT, function () {
    console.log(`The server is running successfilly on port: ${PORT} `);
});
