const express = require('express')
const app = express()
const port = 3006

app.set('view engine','pug')

const user = require('./routers/user')
const about = require('./routers/about')

/*ALL ROUTE MIDDLEWARE */
/*app.use((req,res,next)=>{
    const isAuthorized=false;
    if (isAuthorized) {
        next();
    }
    else{
        res.send("You have no authority. Please Login.");
    }
})*/
/*Middleware for Only One Page */
/*app.use('/user',(req,res,next)=>{
    const isAuthorized=false;
    if (isAuthorized) {
        next();
    }
    else{
        res.send("You have no authority. Please Login.")
    }
})*/
//helpers
/*const isAuth = require('./helpers/isAuth')
app.use('/user',isAuth)*/


app.use('/',user)
app.use('/api/',about)

app.use((err,req,res,next)=>{
    res.status(err.status);
    res.render('error.pug',{message:err.message,status:err.status})
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))