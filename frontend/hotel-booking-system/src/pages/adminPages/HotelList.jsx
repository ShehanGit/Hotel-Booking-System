import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

    return (
        <ul className="hotel-list">
            {hotels.map(hotel => (
                <li key={hotel.id} className="hotel-item">
                    <div className="hotel-image">
                        <img src={`http://localhost:8080/hotels/download/${hotel.imageUrl}`} alt="Hotel" />
                    </div>
                    <div className="hotel-details">
                        <h2>{hotel.hotelId}</h2>
                        <h2>{hotel.name}</h2>
                        <p>{hotel.description}</p>
                        <p><strong>Rating:</strong> {hotel.rating}</p>
                        <p><strong>Location:</strong> {hotel.location}</p>
                        <p><strong>image:</strong> {hotel.imageUrl}</p>
                        <p><strong>Address:</strong> {hotel.address}, {hotel.city}, {hotel.state}, {hotel.country}, {hotel.postalCode}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default HotelList;
