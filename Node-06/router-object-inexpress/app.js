const express = require('express')
const app = express()
const port = 3005

const user = require('./routers/user')
const about = require('./routers/about')

app.use('/',user)
app.use('/api/',about)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))