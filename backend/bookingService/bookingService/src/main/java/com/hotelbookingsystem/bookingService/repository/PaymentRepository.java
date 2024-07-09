package com.hotelbookingsystem.bookingService.repository;

import com.hotelbookingsystem.bookingService.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
//    List<Payment> findByBookingId(Long bookingId);
//    List<Payment> findByPaymentStatus(String paymentStatus);
}
