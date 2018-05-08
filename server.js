const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.send({
        name:'zach',
        likes: ['biking','cities']
    });
});
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page cool',
        currentYear: new Date().getFullYear()
    });
});
app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page cool',
        welcomeMessage: 'Welcome',
        currentYear: new Date().getFullYear()
    });
});


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable tohandle request'
    });
});
app.listen(port, () => {
    console.log(`server is up @ ${port}`)
});
