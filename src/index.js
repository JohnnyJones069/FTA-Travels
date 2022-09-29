import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import About from './layout/About';
import Contact from './layout/Contact';
import Footer from './layout/Footer';
import Trips from './layout/Trips';

// Imports (ADMIN?)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="trips" element={<Trips />} />
      <Route path="footer" element={<Footer />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

