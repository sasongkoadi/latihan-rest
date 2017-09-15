const express = require('express');
const BukuService = require('./domains/buku/buku-service')
const app = express();
const port = 3001
 
app.get('/', function(req, res) {
    res.send("Hello world!")
});

app.get('/api/buku', function(req, res) {
    const bukuService = new BukuService();
    result = bukuService.getAll();
    res.send(result);
});

app.get('/api/buku/:id', function(req, res) {
    const id = req.params['id'];
    const bukuService = new BukuService();
    result = bukuService.getByID(id);
    res.send(result);
});


app.listen(port, function() {
    console.log(`Server is running in port ${port}`);
})


//request->routes/controller->