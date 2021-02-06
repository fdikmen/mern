const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')

//  app.get('/', (req, res) => res.send('Hello World!')) 
//  app.get('/', (req, res) => res.render('index.pug'))
    app.get('/', (req, res) => res.render('index',{name:'Johanna',phone:'252-702-3815'}))
app.get('/home', (req, res) => res.render('home'))
app.get('/contact', (req, res) => res.render('contact'))

app.listen(port, () => console.log(`Example app listening on port port!`))

