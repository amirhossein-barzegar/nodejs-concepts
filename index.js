import express from 'express'
import fs from 'fs'

const app = express();

app.use((req, res, next) => {
    next()
})
var start = Date.now()
console.log('start', start)
app.get('/', (req, res) => {
    var data = fs.readFile('./example.txt', (err, data) => {
        res.send(data.toString())
    })
    // res.send(data.toString())
    console.log('end', Date.now())
    console.log('tooks: ', Date.now() - start)
})

app.listen(8080, () => console.log(`application is running on http://localhost:8080/`))