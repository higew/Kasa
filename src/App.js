import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Error from './pages/error/Error'
import HouseSheet from './pages/housesheet/HouseSheet'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housesheet/:id" element={<HouseSheet />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
