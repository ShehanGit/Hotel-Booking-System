import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import '../../css/Booking.css'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Booking() {
    const { hotelId, userId } = useParams();
    const [bookingData, setBookingData] = useState({
        user: {
            userId: userId
        },
        room: {
            roomId: hotelId // Remember to change this as needed
        },
        checkInDate: '',
        checkOutDate: '',
        numberOfGuests: 1,
        status: 'pending'
    });

    const handleDateChange = (date, name) => {
        setBookingData(prev => ({ ...prev, [name]: date }));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setBookingData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            console.log('Booking Data:', bookingData); // Log booking data before sending
            const response = await axios.post('http://localhost:8080/bookings', bookingData);
            console.log('Response:', response); // Log the response from the server
            alert('Booking successfully created!');
        } catch (error) {
            console.error('Failed to create booking:', error);
            if (error.response) {
                console.error('Server Response:', error.response.data); // Log server response
                alert(`Failed to create booking: ${error.response.data.message}`);
            } else {
                alert('Failed to create booking. Check the console for more information.');
            }
        }
    };

    return (
        <div>
            <NavBar />
            <div className="booking-form-container">
                <h2>Create Booking for Hotel ID: {hotelId} and User ID: {userId}</h2>
                <div className="booking-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="checkInDate">Check-In Date:</label>
                                <DatePicker
                                    selected={bookingData.checkInDate}
                                    onChange={(date) => handleDateChange(date, 'checkInDate')}
                                    dateFormat="yyyy-MM-dd"
                                    inline
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="checkOutDate">Check-Out Date:</label>
                                <DatePicker
                                    selected={bookingData.checkOutDate}
                                    onChange={(date) => handleDateChange(date, 'checkOutDate')}
                                    dateFormat="yyyy-MM-dd"
                                    inline
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="numberOfGuests">Number of Guests:</label>
                            <input
                                type="number"
                                id="numberOfGuests"
                                name="numberOfGuests"
                                value={bookingData.numberOfGuests}
                                onChange={handleChange}
                                min="1"
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Create Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booking;
