const dotenv = require('dotenv');

const express = require('express');
const app = express();
const path = require('path');

dotenv.config({path:'./.env'})



// static files
app.use(express.static(path.join(__dirname,'./dist')))

// routes
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./dist/index.html'))
})

const port = process.env.PORT || 6010;

app.get('/',(req,res)=>{
    res.send('hello I m the best in the world');
})

app.listen(port,()=>{
    console.log(`ser is running on the port ${port}`);
})