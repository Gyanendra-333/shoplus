import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    {/* <React.StrictMode>  */}

    <Header />
    <Home />
    <Footer />

  </div>

  // </React.StrictMode>

);