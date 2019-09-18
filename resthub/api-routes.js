//Initialize express routes
let router = require('express').Router();

//Set default API Response
router.get('/', function(req, res){
  res.json({
      nama: "Richard Muhammad",
      Tanggal_Lahir: "14 Januari 1994",
      Jenis_Kelamin: "Laki-laki",
      Hobby        : "Membaca Buku"
});
});

// Export API
module.exports = router;
