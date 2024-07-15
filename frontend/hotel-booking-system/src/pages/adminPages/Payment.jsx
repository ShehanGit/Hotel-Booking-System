import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import './PaymentPage.css';

function PaymentPage() {
    const { hotelId, userId } = useParams();
    const [hotelDetails, setHotelDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/hotels/${hotelId}`)
            .then(response => response.json())
            .then(data => {
                setHotelDetails(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching hotel details:', error);
                setLoading(false);
            });
    }, [hotelId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="payment-page">
            <NavBar />
            <div className="payment-container">
                <h2>Payment Details</h2>
                <div className="hotel-info">
                    <h3>{hotelDetails.hotelName}</h3>
                    <p>{hotelDetails.description}</p>
                    <p><strong>Price: </strong>${hotelDetails.price}</p>
                </div>
                <form className="payment-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="card">Card Details</label>
                        <input type="text" id="card" name="card" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <button type="submit">Pay Now</button>
                </form>
            </div>
        </div>
    );
}

export default PaymentPage;
