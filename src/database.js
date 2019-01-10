const mongoose = require('mongoose'); // este módulo sirve para conectarse con la base de datos (MongoDB)

const URI = 'mongodb://localhost:27017/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;