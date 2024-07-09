package com.hotelbookingsystem.bookingService.repository;

import com.hotelbookingsystem.bookingService.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
//    List<Room> findByHotelId(Long hotelId);
}
