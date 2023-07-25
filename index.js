const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('iPlayed!')
})

app.listen(PORT, () => {
  console.log(`App backend listening on port ${PORT}`)
})