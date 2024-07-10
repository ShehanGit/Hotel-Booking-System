import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { SideBar1 } from '../../components/SideBar';
import '../../css/HotelCreate.css'; 
import { createHotel } from '../../service/HotelService';


function HotelCreate() {
    const [hotelData, setHotelData] = useState({
        name: '',
        location: '',
        description: '',
        rating: '',
        latitude: '',
        longitude: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        image: null
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setHotelData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = e => {
        setHotelData(prev => ({ ...prev, image: e.target.files[0] }));
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;
        Object.entries(hotelData).forEach(([key, value]) => {
            if (!value && key !== 'image') {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = new FormData();
        Object.entries(hotelData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            await createHotel(formData);
            alert('Hotel successfully created!');
        } catch (error) {
            console.error('Failed to create hotel:', error);
            alert('Failed to create hotel. Check the console for more information.');
        }
    };

    return (
        <div className="App">
            <NavBar />
            <SideBar1 />
            <div className="hotel-create-form">
                <form onSubmit={handleSubmit}>
                    {Object.entries(hotelData).map(([key, value]) => (
                        <div key={key} className="form-group">
                            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                            <input
                                type={key === 'rating' || key === 'latitude' || key === 'longitude' ? 'number' : key === 'image' ? 'file' : 'text'}
                                id={key}
                                name={key}
                                value={key !== 'image' ? value : undefined}
                                onChange={key === 'image' ? handleFileChange : handleChange}
                                className={`form-control ${errors[key] ? 'is-invalid' : ''}`}
                            />
                            {errors[key] && <div className="error-message">{errors[key]}</div>}
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Create Hotel</button>
                </form>
            </div>
        </div>
    );
}

export default HotelCreate;
