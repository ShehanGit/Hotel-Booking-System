package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.User;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import com.hotelbookingsystem.bookingService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("User not found with id: " + id)
        );
        return ResponseEntity.ok(user);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("User not found with id: " + id)
        );

        updatedUser.setUsername(userDetails.getUsername());
        updatedUser.setPassword(userDetails.getPassword());
        updatedUser.setEmail(userDetails.getEmail());
        updatedUser.setFirstName(userDetails.getFirstName());
        updatedUser.setLastName(userDetails.getLastName());
        updatedUser.setPhoneNumber(userDetails.getPhoneNumber());
        updatedUser.setAddress(userDetails.getAddress());
        updatedUser.setUserRole(userDetails.getUserRole());

        userRepository.save(updatedUser);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("User not found with id: " + id)
        );
        userRepository.delete(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
