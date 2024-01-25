const express = require('express');
const dbConnect = require('./config/dbConnect');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

dbConnect();

app.get('/', (req, res) => {});

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/contacts', require('./routes/contactRoutes'));

app.listen(8080, () => {
    console.log('Server Running');
});