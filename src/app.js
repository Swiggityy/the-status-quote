const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('This is the help page!')
})
// the-status-quote.com

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})