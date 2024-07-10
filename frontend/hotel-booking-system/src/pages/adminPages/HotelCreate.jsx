import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { SideBar1 } from '../../components/SideBar';
<<<<<<< HEAD
import '../../css/HotelCreate.css'; // Ensure this is the correct path to your CSS file
import { createHotel } from '../../service/HotelService'; 

=======
import '../../css/HotelCreate.css';
import { createHotel } from '../../service/HotelService';  // This service should handle API POST requests
>>>>>>> parent of ccf82ff (hotel create form created sucsesfully)

function HotelCreate() {
  const [hotelName, setHotelName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!hotelName) {
      newErrors.hotelName = "Hotel name is required";
      isValid = false;
    }
    if (!location) {
      newErrors.location = "Location is required";
      isValid = false;
    }
    if (!image) {
      newErrors.image = "Image is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append('name', hotelName);
      formData.append('location', location);
      formData.append('image', image);

      createHotel(formData).then(response => {
        console.log(response.data);
      }).catch(err => {
        console.error(err);
      });
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="App">
      <NavBar />
      <div style={{ display: "flex" }}>
        <SideBar1 style={{ flex: "0 0 250px" }} />
        <div className="center-container">
          <div className="container1">
            <form className="p-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="hotelName" className="block mb-2 text-lg font-medium text-left text-white">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    className="input-field"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                    required
                  />
                  {errors.hotelName && <div className="text-red-500">{errors.hotelName}</div>}
                </div>
                <div>
                  <label htmlFor="location" className="block mb-2 text-lg font-medium text-left text-white">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="input-field"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                  {errors.location && <div className="text-red-500">{errors.location}</div>}
                </div>
                <div>
                  <label htmlFor="image" className="block mb-2 text-lg font-medium text-left text-white">
                    Hotel Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="input-field"
                    onChange={handleImageChange}
                    required
                  />
                  {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>
              </div>
              <button type="submit" className="submit-button">
                Create Hotel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCreate;
