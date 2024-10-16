const express = require("express");
var morgan = require('morgan')

const app = express();
app.use(morgan('dev'))

// rutas
app.get("/", function(req, res) {
    return res.json({mensaje: "Hola Mundo desde Node con (Docker)"})
})

app.get("/producto", function(req, res) {
    return res.json([
        {id: 1, nombre: "TECLADO", precio: 30, stock: 25 },
        {id: 2, nombre: "MOUSE", precio: 10, stock: 60 },
        {id: 3, nombre: "MONITOR DELL", precio: 950, stock: 3 },
    ])
})

app.get("/usuarios", function(req, res) {
    return res.json([
        {id: 1, nombre: "CRISTIAN", telefono: 59173277937, direccion: "Av 123  Z. ABC" },
        {id: 2, nombre: "JUAN CARLOS", telefono: 987465, direccion: "Av Prueba " },
        {id: 3, nombre: "MARIA", telefono: 65432, direccion: "Av 10 de Octubre" },
        {id: 4, nombre: "DAVID", telefono: 21364684, direccion: "Av ALTO" },
    ])
})

app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000")
})
