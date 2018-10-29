const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, './build', 'index.html');

app.get('/', function (req, res) {
  console.log('/')
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) { return console.log(err); }
    data = data.replace(/\$OG_TITLE/g, 'Klinik KTA | Pelayanan Kesehatan Anda');
    res.send(data);
  })
})
app.get('/klinik-taman-anggrek', function (req, res) {
    console.log('/klinik-taman-anggrek')
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) { return console.log(err); }
      data = data.replace(/\$OG_TITLE/g, 'Klinik Taman Anggrek');
      res.send(data);
    })
})
app.get('/klinik-kta-srengseng-junction', function (req, res) {
    console.log('/klinik-kta-srengseng-junction')
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) { return console.log(err); }
      data = data.replace(/\$OG_TITLE/g, 'Klinik KTA Srengseng Junction');
      res.send(data);
    })
})
app.get('/klinik-syifa-medika', function (req, res) {
    console.log('/klinik-syifa-medika')
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) { return console.log(err); }
      data = data.replace(/\$OG_TITLE/g, 'Klinik Syifa Medika');
      res.send(data);
    })
})
app.get('/klinik-kta-surya-cipta', function (req, res) {
    console.log('/klinik-kta-surya-cipta')
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) { return console.log(err); }
      data = data.replace(/\$OG_TITLE/g, 'Klinik KTA Surya Cipta');
      res.send(data);
    })
})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));