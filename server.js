const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.send('<h1>Hello Express<h1>');
    res.send({
    	name: 'Sumit',
    	likes :[ 'reading', 'writing'
    	]
    });
});

app.get('/about', (req, res) => {
     
    res.send('About Page');
});

//bad -send back json with error message

app.get('/bad', (req, res) => {
     
    res.send({
    	errorMessage: 'Error Occured'
    });
});

app.listen(3000);