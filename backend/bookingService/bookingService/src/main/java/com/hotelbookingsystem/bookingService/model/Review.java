package com.hotelbookingsystem.bookingService.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne
    @JoinColumn(name = "hotel_id", referencedColumnName = "hotelId")
    private Hotel hotel;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User user;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "comment", length = 1024)  // Assuming a longer text field
    private String comment;

    @Column(name = "date_posted")
    @Temporal(TemporalType.DATE)
    private Date datePosted;
}
