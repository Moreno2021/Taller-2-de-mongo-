const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
//usuarios 
const userRoutes = require("./routes/user");
//futbolistas
const futbolistasRoutes = require("./routes/futbolistas");
// equipos
const equiposRoutes = require("./routes/equipos");

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
//usuarios
app.use('/api', userRoutes);
//futbolistas
app.use('/api', futbolistasRoutes);
// equipos
app.use('/api', equiposRoutes);

//ruta
app.get('/',(req,res)=>{
    res.send("Hola mundo");
});

//conexion mongoDb
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log('Conectado a MongoDb Atlas'))
    .catch((error)=> console.error(error));

app.listen(port,()=>console.log(`El servidor esta funcionando en el puerto ${port}...`));
