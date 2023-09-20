const express = require('express');
const app = express();
const port = 8000;
app.use('/',require('./Routes'));
app.set('view engine', 'ejs');
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