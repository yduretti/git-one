import express from 'express';
const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Hello YD</h2>')
})

app.listen(3000, () => {
    console.log("Started on port 3000")
})