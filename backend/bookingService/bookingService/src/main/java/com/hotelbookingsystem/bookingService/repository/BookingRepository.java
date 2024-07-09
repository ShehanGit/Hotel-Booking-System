package com.hotelbookingsystem.bookingService.repository;

import com.hotelbookingsystem.bookingService.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
//    List<Booking> findByUserId(Long userId);
//    List<Booking> findByRoomId(Long roomId);
//    List<Booking> findByCheckInDateBetween(Date start, Date end);
}