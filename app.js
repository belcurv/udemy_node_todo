var express  = require('express'),
    app      = express(),
    config   = require('./config'),
    mongoose = require('mongoose'),
    setupController = require('./controllers/setupController'),
    apiController   = require('./controllers/apiController'),
    morgan   = require('morgan'),
    port     = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(morgan('dev'));

// connect to db
mongoose.connect(config.getDbConnectionString());

// controller to seed database
setupController(app);
apiController(app);

// start server
app.listen(port);