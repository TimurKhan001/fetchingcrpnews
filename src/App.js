import React from "react";
import Header from "./Header";
import CryptoSection from "./CryptoSection";
import NewsSection from "./NewsSection";
import Crypto101 from "./Crypto101";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoSection />
      <NewsSection />
      <Crypto101 />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;