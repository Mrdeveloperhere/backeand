require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/pankaj', (req, res) => {
    res.send('pankaj!');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});