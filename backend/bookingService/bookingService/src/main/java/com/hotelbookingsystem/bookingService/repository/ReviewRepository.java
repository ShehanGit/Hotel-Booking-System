package com.hotelbookingsystem.bookingService.repository;

import com.hotelbookingsystem.bookingService.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
//    List<Review> findByHotelId(Long hotelId);
//    List<Review> findByUserId(Long userId);
}
