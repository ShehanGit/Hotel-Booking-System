// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flowbite } from 'flowbite-react'; // Import Flowbite
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Flowbite> {/* Wrap your application with Flowbite */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </Flowbite>
    </div>
  );
}

export default App;
