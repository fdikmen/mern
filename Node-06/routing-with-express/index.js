const express = require('express')
const app = express()
const port = 3001

app.all('/info', (req, res) => res.send('Hello World from ALL Method!'))
app.get('/', (req, res) => res.send('Hello World from GET Method!'))
app.post('/', (req, res) => res.send('Hello World from POST Method!'))
app.delete('/', (req, res) => res.send('Hello World from DELETE Method!'))
app.put('/', (req, res) => res.send('Hello World from PUT Method!'))

/*OPTIONAL URL */
//app.get('/cont?act', (req, res) => res.send('Hello World in Contact Page!'))
//app.get('/cont(ac)?t', (req, res) => res.send('Hello World in Contact Page!'))
//app.get('/co?nt(ac)?t', (req, res) => res.send('Hello World in Contact Page!'))
/*ANY TEXT */
//app.get('/con*tact', (req, res) => res.send('Hello World in Contact Page!'))
/**with plus */
//app.get('/con+tact', (req, res) => res.send('Hello World in Contact Page!'))

app.get('/c+on*tac?t', (req, res) => res.send('Hello World in Contact Page!'))

app.get('/user/:id', (req, res) => {
    res.end('Hello World in User Page! UserId:'+req.params.id)
})

app.get('/post/:postId/:userId?', (req, res) => {
    // console.log(req.params);
    res.send(req.params)
})


app.listen(port, () => console.log(`Example app listening on port port!`))