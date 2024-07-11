import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import '../../css/HotelList.css'; 

function HotelList() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/hotels')
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => console.error('Error fetching hotels:', error));
    }, []);

    // Helper function to render star ratings
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<span key={i} className={i <= rating ? "star filled" : "star"}>★</span>);
        }
        return stars;
    };

    return (
        <div>
            <NavBar />
            <ul className="hotel-list">
                {hotels.map(hotel => (
                    <li key={hotel.id} className="hotel-item">
                        <div className="hotel-image">
                            <img src={`http://localhost:8080/hotels/download/${hotel.imageUrl}`} alt="Hotel" />
                        </div>
                        <div className="hotel-details">
                            <h2 >{hotel.hotelName}</h2>
                            <div className="rating">{renderStars(hotel.rating)}</div>

                            <p><strong>Location:</strong> {hotel.location}</p>

                            <p><strong>Address:</strong> {hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}, {hotel.postalCode}</p>

                            <p>{hotel.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HotelList;
