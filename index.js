const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const db = require('./config/mongoose')
app.use('/',require('./Routes'));
app.set('view engine', 'ejs');
app.use('/asset', express.static('asset'));
app.set('views','./views')

app.listen(port,function(err)
{
   if(err)
   {
    console.log("error",err);
   }
   console.log('server is running in port',port);
}
);