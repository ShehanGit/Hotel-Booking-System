// HotelService.js
import axios from 'axios';

export const createHotel = (formData) => {
  return axios.post('http://localhost:8080/hotels', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};
