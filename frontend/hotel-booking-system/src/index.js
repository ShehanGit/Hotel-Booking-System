// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Flowbite } from 'flowbite-react'; // Import Flowbite

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Flowbite> {/* Wrap your entire app in Flowbite */}
      <App />
    </Flowbite>
  </React.StrictMode>
);

reportWebVitals();
