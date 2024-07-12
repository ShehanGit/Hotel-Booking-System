import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import '../../css/HotelDetails.css'; 
import { useNavigate } from 'react-router-dom';


function HotelDetails() {
    const { id } = useParams(); // Get the hotel ID from the URL
    const [hotel, setHotel] = useState(null);

    const navigate = useNavigate(); 


    useEffect(() => {
        axios.get(`http://localhost:8080/hotels/${id}`)
            .then(response => {
                setHotel(response.data);
            })
            .catch(error => console.error('Error fetching hotel details:', error));
    }, [id]);

    if (!hotel) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar />
            <div className="hotel-details-container">
                <div className="hero-section">
                    <img src={`http://localhost:8080/hotels/download/${hotel.imageUrl}`} alt="Hotel" className="hero-image" />
                    <div className="hero-text">
                        <h1>{hotel.hotelName}</h1>
                        <p>{hotel.location}</p>
                    </div>
                </div>
                <div className="details-section">
                    <div className="sidebar">
                        <div className="sidebar-item">
                            <h2>Price</h2>
                            <p>LKR {hotel.price}</p>
                        </div>
                        <div className="sidebar-item">
                            <h2>Rating</h2>
                            <p>{hotel.rating} / 5</p>
                        </div>
                        <div className="sidebar-item">
                            <h2>Stars</h2>
                            <p>{hotel.stars} ★</p>
                        </div>
                        <button className="booking-button" onClick={() => navigate(`/booking/${hotel.hotelId}`)}>
                            Book Now
                        </button>
                    </div>
                    <div className="main-details">
                        <div className="info-block">
                            <h2>Description</h2>
                            <p>{hotel.description}</p>
                        </div>
                        <div className="info-block">
                            <h2>Features</h2>
                            <p>{hotel.features}</p>
                        </div>
                        <div className="info-block">
                            <h2>Address</h2>
                            <p>{hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}, {hotel.postalCode}</p>
                        </div>
                        <div className="info-block">
                            <h2>Location</h2>
                            <p>Latitude: {hotel.latitude}, Longitude: {hotel.longitude}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelDetails;
