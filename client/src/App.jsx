import React from 'react';
import { Home, Discover, Market, Nomatch } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='discover' element={<Discover />} />
        <Route path='marketplace' element={<Market />} />
        <Route path='collections'>
          <Route path='hape_prime' element={<Market/>}/>
        </Route>
        <Route path='/*' element={<Nomatch/>} />
      </Routes>
    </div>
  );
}

export default App;
