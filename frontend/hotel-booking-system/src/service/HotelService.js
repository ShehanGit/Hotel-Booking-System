// HotelService.js
import axios from 'axios';

export const createHotel = (formData) => {
  return axios.post('http://localhost:8080/hotels', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

// Add this function to your HotelService.js file

export const getHotels = async () => {
  const response = await fetch('http://localhost:8080/api/hotels'); // Adjust the URL to match your API endpoint
  if (!response.ok) {
      throw new Error('Failed to fetch hotels');
  }
  return await response.json();
};