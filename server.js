const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

const port = 5555
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
