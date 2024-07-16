// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flowbite } from 'flowbite-react'; // Import Flowbite
import './App.css';
import HomePage from './pages/HomePage';
import HotelCreate from './pages/adminPages/HotelCreate';
import HotelList from './pages/adminPages/HotelList';
import HotelDetails from './pages/adminPages/HotelDetails';
import Booking from './pages/adminPages/Booking';
// import Payment from './pages/adminPages/Payment';
import PaymentPage from './pages/adminPages/Payment';


function App() {
  return (
    <div className="App">
      <Flowbite> {/* Wrap your application with Flowbite */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotel-create" element={<HotelCreate />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/hotel-details/:id" element={<HotelDetails />} />
            <Route path="/booking/:hotelId/:userId" element={<Booking />} />
            {/* <Route path="/payment/:hotelId/:userId" element={<Payment />} /> */}
            <Route path="/payment" element={<PaymentPage />} />
            
          </Routes>
        </Router>
      </Flowbite>
    </div>
  );
}

export default App;
