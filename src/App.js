import React from 'react';
import './App.css';

function App() {

  return (
    <div className="Box">
      <FotoProduk />
      <ProdukInfo kategori="JERSEY" judul="JERSEY TRAINING INDONESIA" harga="750000" stok="0" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="jersey.jpg" alt="jersey" />
    </div>
  );
}

function Diskon(props) {
  const { stok } = props;
  if (stok > 0) {
    return (
      <p>Tersedia</p>
    )
  }
  else {
    return (

      <p style={{ color: 'red' }} >stok kosong</p>

    )
  }
}

function ProdukInfo(props) {
  const { kategori, judul, harga, stok } = props;
  return (
    <div className="Deskripsi">
      <p className="kategori">{kategori}</p>
      <h1 className="Judul">{judul}</h1>
      <Diskon stok={stok} />
      <p className="Harga">{harga}</p>
      <p className="Info">
        Made in Indonesia
      </p>
      <a onClick={(e) => BeliProduk(judul, e)} href="#">BELI</a>
    </div>
  );
}

function BeliProduk(e) {
  return console.log('masuk keranjang...' + e);
}


export default App;
