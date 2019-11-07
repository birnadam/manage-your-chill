// Define our dependencies
const express        = require('express');
const session        = require('express-session');
const axios          = require('axios');
const winston        = require('winston');
const logger         = require('./logs/Wlogger');

//local files
const routes        = require('./routes');
//
//======================================================================================


const cors = require('cors');

//start db connection
try{
    mongoose.connect('mongodb://localhost:twitch/vote-your-landing', { useNewUrlParser: true, useCreateIndex: true });
    console.log("mongo connected")
}catch(err){//
    console.log(err);
}


// Initialize Express and middlewares
let app = express();



app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(routes);

//

//production setup

// app.post('/auth/')
// // If we are in production, serve our clients build folder.
// // This folder is created during production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

// // Server setup
const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Twitch auth sample listening on port ${PORT}`)
});
