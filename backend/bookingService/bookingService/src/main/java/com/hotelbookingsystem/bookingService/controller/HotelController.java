package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.Hotel;
import com.hotelbookingsystem.bookingService.repository.HotelRepository;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @PostMapping
    public Hotel createHotel(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    @GetMapping("{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Hotel not found with id: " + id)
        );
        return ResponseEntity.ok(hotel);
    }

    @PutMapping("{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel hotelDetails) {
        Hotel updatedHotel = hotelRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Hotel not found with id: " + id)
        );

        updatedHotel.setHotelName(hotelDetails.getHotelName());
        updatedHotel.setLocation(hotelDetails.getLocation());
        updatedHotel.setDescription(hotelDetails.getDescription());
        updatedHotel.setRating(hotelDetails.getRating());
        updatedHotel.setLatitude(hotelDetails.getLatitude());
        updatedHotel.setLongitude(hotelDetails.getLongitude());
        updatedHotel.setAddress(hotelDetails.getAddress());
        updatedHotel.setCity(hotelDetails.getCity());
        updatedHotel.setState(hotelDetails.getState());
        updatedHotel.setCountry(hotelDetails.getCountry());
        updatedHotel.setPostalCode(hotelDetails.getPostalCode());

        hotelRepository.save(updatedHotel);
        return ResponseEntity.ok(updatedHotel);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteHotel(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Hotel not found with id: " + id)
        );
        hotelRepository.delete(hotel);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
