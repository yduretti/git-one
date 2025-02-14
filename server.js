const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello YD</h1>')
})

app.listen(3000, () => {
    console.log("Started on port 3000")
})