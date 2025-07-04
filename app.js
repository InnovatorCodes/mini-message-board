const express= require('express');
const path = require("node:path");
const router=require('./routes/router');

const app =express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use('/', router)
app.use((err,req,res,next)=>{
    console.log('Page Not Found: '+ req.url);
    res.status(err.statusCode || 500).render('error',{title: err.message});
})

app.listen(8080,()=>console.log('Listening on port 8080'));