var express = require('express');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 3000));

// set static path middleware
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), function() {
    console.log('Expres server is running on port 3000!');
});