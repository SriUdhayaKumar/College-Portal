const express = require(`express`);
const app = express();

const login = require(`./routes/Login.js`);

app.use(express.static("public"));
app.set("view engine","ejs");

app.use("/",login);

app.listen(3000,()=>{
    console.log("Server running on the port 3000"); 
});