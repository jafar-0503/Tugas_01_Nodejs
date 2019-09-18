// import express
let express = require('express');

//Import routes
let apiRoutes = require('./api-routes');

//initialize app
let app = express();

//setup server port 8080
var port = process.env.PORT || 8080;

//send message for default url
app.get('/', (req, res) =>
res.send("<h2><center>Selamat Datang Di Data Center Siswa Indonesia</center></h2>"));

//app apiRoutes
app.use('/DataSiswa', apiRoutes);

//launch app to listen specified PORT
app.listen(port, function(){
  console.log("Running Resthub on PORT " + port);
})
