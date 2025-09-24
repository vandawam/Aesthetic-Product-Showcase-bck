const express = require('express');
const cors = require('cors');
const products = require('./products.json'); // Import data produk

const app = express();
const PORT = 3001; // Pilih port yang tidak dipakai React

app.use(cors()); // Izinkan akses dari domain lain

// Endpoint untuk mendapatkan semua produk
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint untuk mendapatkan satu produk berdasarkan ID (opsional, untuk halaman detail)
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
