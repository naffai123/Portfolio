const express = require('express');
const mongoose = require('mongoose');
const projectRouter = require('./routes/projectRouter');


const db = "mongodb+srv://Naffai:azerty1234@cluster0.xjv3953.mongodb.net/portfolio?retryWrites=true&w=majority" //path bdd a mettre ici
const app = express()
app.use(express.static("./assets"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(projectRouter)

app.listen(3000,(err)=>{
    if (err) {
       console.log(err); 
    }else{
        console.log('Je suis connecté');
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecter a la bdd");
    }
})




