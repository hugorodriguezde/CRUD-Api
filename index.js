const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
//Crear servidor
const app = express();

//Conectar a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/products', require('./routes/product')); // Rutas para productos
app.use('/api/mapdata', require('./routes/map')); // Rutas para mapa
app.use('/api/calendar', require('./routes/calendar'))
app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
})