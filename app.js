let express = require("express"),
    app = express(),
    cors = require('cors'),
    bodyParser = require("body-parser");

let routes = require('./routes/route');

// App Config
app.use(bodyParser.json({extended: true}));
app.use(cors());

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log(`Server listening on ${port}`);
});


module.exports.app = app;
