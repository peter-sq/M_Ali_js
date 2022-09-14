import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';

const App = () => {
  return (
   <BrowserRouter>
     <Navbar/>
   </BrowserRouter>
  )
}

export default App
