const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/tables', (req, res) => {
    return res.render('pages/tables');
});

app.get('/form-basic', (req, res) => {
    return res.render('pages/form-basic');
});

app.get('/form-wizard', (req, res) => {
    return res.render('pages/form-wizard');
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server started on http://localhost:${port}`);
    }
});
