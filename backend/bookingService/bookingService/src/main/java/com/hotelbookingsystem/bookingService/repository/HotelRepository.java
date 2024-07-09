package com.hotelbookingsystem.bookingService.repository;

import com.hotelbookingsystem.bookingService.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
//    List<Hotel> findByLocationContaining(String location);
//    List<Hotel> findByHotelNameContaining(String hotelName);
}
