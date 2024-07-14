import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import '../../css/HotelList.css'; 
import { useNavigate } from 'react-router-dom';

function Payment() {
   

    return (
        <div>
            <NavBar />
            <h1>Payment</h1>
        </div>
    );
}

export default Payment;
