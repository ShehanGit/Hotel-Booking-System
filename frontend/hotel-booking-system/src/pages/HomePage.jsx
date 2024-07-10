import React from 'react';
import NavBar from '../components/NavBar';
import { Carousel } from "flowbite-react";

function HomePage() {
  return (
    <div className="App">
      <NavBar />

      <div className="flex justify-between items-center mx-auto p-6" style={{ width: '80%' }}>
        {/* Content Section */}
        <div className="space-y-4 max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Discover Your Perfect Hotel</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Explore the best hotels at the best prices. Where would you like to stay?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>

        {/* Carousel Section */}
        <div className="w-3/5 h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="First slide" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Second slide" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Third slide" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Fourth slide" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Fifth slide" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
