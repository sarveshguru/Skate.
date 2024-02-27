import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Canvaspro from './components/canvaspro/Canvaspro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Canvaspro' element={<Canvaspro />} />
      </Routes>
    </Router>
  );
}

export default App;
