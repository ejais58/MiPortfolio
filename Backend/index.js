const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//ejecutar servidor express
const app = express();

//Conectar base de datos
dbConnection();

//Cors
app.use(cors());


//Lectura y parseo del body
app.use(express.json());

app.use('/api/home', require('./routes/home'));

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});