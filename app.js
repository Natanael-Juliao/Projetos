const express = require('express');
const app = express();

app.get("/", async (req, res) => {
    res.send("Pagina inicial - ");
});

app.listen(8080, () => {
    console.log('Servidor Inciado na Porta 8080');
});