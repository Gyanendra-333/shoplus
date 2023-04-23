import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Registor from './components/UserAuth/Registor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    {/* <React.StrictMode>  */}

    {/* <Home /> */}
    <Registor />

  </div>

  // </React.StrictMode>

);