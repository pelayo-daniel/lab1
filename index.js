const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("Fixing conflict. Feature A and B");
  res.status(200).json({message: "Hello world!"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})