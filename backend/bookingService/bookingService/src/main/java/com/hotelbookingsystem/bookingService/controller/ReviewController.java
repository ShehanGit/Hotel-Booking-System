package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.Review;
import com.hotelbookingsystem.bookingService.repository.ReviewRepository;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @PostMapping
    public Review createReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }

    @GetMapping("{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id) {
        Review review = reviewRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Review not found with id: " + id)
        );
        return ResponseEntity.ok(review);
    }

    @PutMapping("{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody Review reviewDetails) {
        Review updatedReview = reviewRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Review not found with id: " + id)
        );

        updatedReview.setRating(reviewDetails.getRating());
        updatedReview.setComment(reviewDetails.getComment());
        updatedReview.setDatePosted(reviewDetails.getDatePosted());

        reviewRepository.save(updatedReview);
        return ResponseEntity.ok(updatedReview);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteReview(@PathVariable Long id) {
        Review review = reviewRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Review not found with id: " + id)
        );
        reviewRepository.delete(review);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
