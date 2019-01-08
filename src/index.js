const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
//app.use(require('./middleware/middleware'));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files




// Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
