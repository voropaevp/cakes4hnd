const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});
app.get('*.css', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});
app.use('/', express.static(__dirname + '/static'));

app.listen(app.get('port'), function() {
   console.log('Node app is running on port', app.get('port'));
});
