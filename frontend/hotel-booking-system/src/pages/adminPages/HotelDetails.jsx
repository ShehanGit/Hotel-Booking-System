import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import '../../css/HotelDetails.css'; 

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
                <h1 className="hotel-name">{hotel.hotelName}</h1>
                <div className="hotel-image">
                    <img src={`http://localhost:8080/hotels/download/${hotel.imageUrl}`} alt="Hotel" />
                </div>
                <div className="hotel-info">
                    <div className="info-block">
                        <p className="info-title"><strong>Location:</strong></p>
                        <p>{hotel.location}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Description:</strong></p>
                        <p>{hotel.description}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Rating:</strong></p>
                        <p>{hotel.rating}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Latitude:</strong></p>
                        <p>{hotel.latitude}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Longitude:</strong></p>
                        <p>{hotel.longitude}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Address:</strong></p>
                        <p>{hotel.address}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>City:</strong></p>
                        <p>{hotel.city}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>State:</strong></p>
                        <p>{hotel.state}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Country:</strong></p>
                        <p>{hotel.country}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Postal Code:</strong></p>
                        <p>{hotel.postalCode}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Features:</strong></p>
                        <p>{hotel.features}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Price:</strong></p>
                        <p>LKR {hotel.price}</p>
                    </div>
                    <div className="info-block">
                        <p className="info-title"><strong>Stars:</strong></p>
                        <p>{hotel.stars}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelDetails;
