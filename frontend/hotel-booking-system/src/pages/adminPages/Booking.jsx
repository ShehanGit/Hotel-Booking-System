import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import '../../css/HotelCreate.css'; 
import { createHotel } from '../../service/HotelService';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Booking() {
    const { id } = useParams();
    

    return (
        <div>
            <NavBar />
            <div className="booking-info">
                <h2>Booking for Hotel ID: {id}</h2>
            </div>
        </div>
    );
}

export default Booking;
