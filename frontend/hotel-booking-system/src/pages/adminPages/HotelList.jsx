import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import '../../css/HotelList.css'; 
import { useNavigate } from 'react-router-dom';

function HotelList() {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate(); // Use useNavigate hook from react-router-dom

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
                    <li key={hotel.hotelId} className="hotel-item">
                        <div className="hotel-image">
                            <img src={`http://localhost:8080/hotels/download/${hotel.imageUrl}`} alt="Hotel" />
                        </div>
                        <div className="hotel-details">
                            <div className="hotel-header">
                                <h2>{hotel.hotelName}</h2>
                                <div className="rating">{renderStars(hotel.stars)}</div>
                                <div className="review-score">
                                    <span className="score">{hotel.rating}</span>
                                    <span className="reviews">Good<br />{hotel.reviews} reviews</span>
                                </div>
                            </div>
                            {/* <div className="location">
                                <a href="#">{hotel.city}, {hotel.country}</a> • <span>{hotel.distanceToCenter} m from centre</span>
                            </div> */}
                            <div className="features">
                                <p><strong>Features:</strong> {hotel.features}</p>
                            </div>
                            <p>{hotel.description}</p>
                            <div className="booking-info">
                                <p><strong>Free cancellation</strong></p>
                                <p><strong>No prepayment needed – pay at the property</strong></p>
                            </div>
                            <div className="price-info">
                                <span className="price">LKR {hotel.price}</span> + LKR {hotel.taxes} taxes and charges
                            </div>
                            <button className="availability-button" onClick={() => navigate(`/hotel-details/${hotel.hotelId}`)}>
                                See availability
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HotelList;
