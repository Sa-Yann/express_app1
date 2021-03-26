// 1 appelle la methode expree
const express = require('express')
// on definie app comme conctante utilisant la fonction express
const app = express()
// on definie le port 3000 comme port d'écoute
const port = 3000


// app get reuqest et response : on defini une réponse exemple comme étant Hello World
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// on dit a express de renvoyer les reponses recu sur le port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})