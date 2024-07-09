package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.Booking;
import com.hotelbookingsystem.bookingService.repository.BookingRepository;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping("{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Booking not found with id: " + id)
        );
        return ResponseEntity.ok(booking);
    }

    @PutMapping("{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
        Booking updatedBooking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Booking not found with id: " + id)
        );

        updatedBooking.setCheckInDate(bookingDetails.getCheckInDate());
        updatedBooking.setCheckOutDate(bookingDetails.getCheckOutDate());
        updatedBooking.setNumberOfGuests(bookingDetails.getNumberOfGuests());
        updatedBooking.setStatus(bookingDetails.getStatus());

        bookingRepository.save(updatedBooking);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteBooking(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Booking not found with id: " + id)
        );
        bookingRepository.delete(booking);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
