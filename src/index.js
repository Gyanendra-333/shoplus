import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Registor from './components/UserAuth/Registor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/UserAuth/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    {/* <React.StrictMode>  */}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registor' element={<Registor />} />
        <Route path='/signin' element={<Login />} />
      </Routes>
    </BrowserRouter>

  </div>

  // </React.StrictMode>

);