// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flowbite } from 'flowbite-react'; // Import Flowbite
import './App.css';
import HomePage from './pages/HomePage';
import HotelCreate from './pages/adminPages/HotelCreate';
import HotelList from './pages/adminPages/HotelList';


function App() {
  return (
    <div className="App">
      <Flowbite> {/* Wrap your application with Flowbite */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotel-create" element={<HotelCreate />} />
            <Route path="/hotels" element={<HotelList />} />
          </Routes>
        </Router>
      </Flowbite>
    </div>
  );
}

export default App;
