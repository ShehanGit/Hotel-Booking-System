import React from 'react';
import { Button, Navbar, DarkThemeToggle, useThemeMode } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import logo from '../Images/Logo.png';

const NavBar = () => {
  const navigate = useNavigate();
  const { toggleMode } = useThemeMode();

  const handleButtonClick = () => {
    navigate('/hotel-create'); 
  };

  const handleButtonClick2 = () => {
    navigate('/loginpage'); 
  }; 

  const handleButtonClick1 = () => {
    navigate('/'); 
  };

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand onClick={handleButtonClick1}>
          <img src={logo} style={{ marginRight: '12px', height: '100px' }} className="mr-3 h-9 sm:h-28" alt="Flowbite React Logo" />
       

          <span onClick={handleButtonClick1} className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">StreamReserve</span>
        </Navbar.Brand>
        

        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="/map">Map</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>

        <div className="flex md:order-2">
              <DarkThemeToggle onClick={toggleMode} className="mr-2" />
              <Button onClick={handleButtonClick} style={{ width: '150px', backgroundColor: '#314985', color: 'white' }}>Login</Button>
        <Navbar.Toggle />
        </div>

      </Navbar>
    </div>
  );
};

export default NavBar;
