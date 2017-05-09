const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const router = require('./routes');
const models = require('./models');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/static', express.static('./public/'));
app.use(router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);

});



models.db.sync({})
.then(function() {
  app.listen(3000, function() {
    console.log('listening impatiently on port', 3000);
  });
}).catch(console.error)
