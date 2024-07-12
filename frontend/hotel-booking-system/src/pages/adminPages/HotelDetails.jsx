import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import '../../css/HotelCreate.css'; 

function HotelDetails() {
    const { id } = useParams(); // Get the hotel ID from the URL
    const [hotel, setHotel] = useState(null);

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
                <h2>{hotel.hotelName}</h2>
                <div className="hotel-image">
                    <img src={`http://localhost:8080/hotels/download/${hotel.imageUrl}`} alt="Hotel" />
                </div>
                <div className="hotel-info">
                    <p><strong>Location:</strong> {hotel.location}</p>
                    <p><strong>Description:</strong> {hotel.description}</p>
                    <p><strong>Rating:</strong> {hotel.rating}</p>
                    <p><strong>Latitude:</strong> {hotel.latitude}</p>
                    <p><strong>Longitude:</strong> {hotel.longitude}</p>
                    <p><strong>Address:</strong> {hotel.address}</p>
                    <p><strong>City:</strong> {hotel.city}</p>
                    <p><strong>State:</strong> {hotel.state}</p>
                    <p><strong>Country:</strong> {hotel.country}</p>
                    <p><strong>Postal Code:</strong> {hotel.postalCode}</p>
                    <p><strong>Features:</strong> {hotel.features}</p>
                    <p><strong>Price:</strong> LKR {hotel.price}</p>
                    <p><strong>Stars:</strong> {hotel.stars}</p>
                </div>
            </div>
        </div>
    );
}

export default HotelDetails;
