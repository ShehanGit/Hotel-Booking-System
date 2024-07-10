import React from 'react';
import NavBar from '../components/NavBar';
import { Carousel } from "flowbite-react";
import '../css/HomePage.css';

// Importing images
import pic1 from '../Images/slideshow/slideshow Pic 1.jpg';
import pic2 from '../Images/slideshow/slideshow Pic 2.jpg';
import pic3 from '../Images/slideshow/slideshow Pic 3.jpg';

function HomePage() {
  return (
    <div className="App">
      <NavBar />

      <div className="flex justify-between items-center mx-auto p-2 mt-20" style={{ width: '85%' }}>
        {/* Content Section */}
        <div className="space-y-4 max-w-md mt-28 mr-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Discover Your Perfect Hotel</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore the best hotels at the best prices. Where would you like to stay?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>

        {/* Carousel Section */}
        <div className="flex-1 min-w-1/2 carousel-height">
          <Carousel slideInterval={5000}>
            <img src={pic1} alt="Scenic view of a city" />
            <img src={pic2} alt="Green landscape at sunrise" />
            <img src={pic3} alt="City skyline at sunrise" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
