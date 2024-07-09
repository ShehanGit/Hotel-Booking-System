package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.Payment;
import com.hotelbookingsystem.bookingService.repository.PaymentRepository;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @PostMapping
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentRepository.save(payment);
    }

    @GetMapping("{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        Payment payment = paymentRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Payment not found with id: " + id)
        );
        return ResponseEntity.ok(payment);
    }

    @PutMapping("{id}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long id, @RequestBody Payment paymentDetails) {
        Payment updatedPayment = paymentRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Payment not found with id: " + id)
        );

        updatedPayment.setPaymentId(paymentDetails.getPaymentId());
        updatedPayment.setAmount(paymentDetails.getAmount());
        updatedPayment.setPaymentMethod(paymentDetails.getPaymentMethod());
        updatedPayment.setPaymentStatus(paymentDetails.getPaymentStatus());

        paymentRepository.save(updatedPayment);
        return ResponseEntity.ok(updatedPayment);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deletePayment(@PathVariable Long id) {
        Payment payment = paymentRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Payment not found with id: " + id)
        );
        paymentRepository.delete(payment);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
