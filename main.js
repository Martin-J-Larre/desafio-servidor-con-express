
const express = require("express");
const PORT = 8091;
let app = express();

app.get("/",(req, res) =>{
    res.send("Productos");
})
// app.get("/Productos",(req, res) =>{
//     res.send("productos.txt");
// })


app.listen(PORT, ()=>{
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`);
});

app.on("error",err =>console.log(`Falló nuestra conexión al servidor`, err));
