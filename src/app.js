const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,'../public');
app.use(express.static(staticpath));

app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.send("hellow");
})

app.get('/about',(req,res)=>{
    res.render("about");
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg:'Opps! Page Not Found'
    });
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})