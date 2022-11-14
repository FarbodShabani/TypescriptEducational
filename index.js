const express = require('express');
const app = express()
const port = 2882

app.get('/', (req, res) => {
  res.sendFile('typeScriptExample/index.html', {root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
