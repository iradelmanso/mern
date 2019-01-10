const express = require('express');
const { mongoose } = require('./database');
const app = express();
const morgan = require('morgan');
const path = require('path');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use(require('./middleware/middleware'));
app.use(morgan('dev')); // morgan sirve para recibir las peticiones por consola
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
// la variable de entorno __dirname nos devuelve la ruta de la ubicación de index.js en este caso.
// usando path.join establece el slash correspondiente dependiendo el sistema operativo.
// con el método static() establecemos donde tenemos la carpeta public
app.use(express.static(path.join(__dirname, 'public'))) 


// Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});



