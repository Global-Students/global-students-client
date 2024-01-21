import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import International from './pages/International';
import SouthKorea from './pages/SouthKorea';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Main' element={<Main />} />
        <Route path='/International' element={<International />} />
        <Route path='/SouthKorea' element={<SouthKorea />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
