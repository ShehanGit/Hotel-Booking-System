package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.Room;
import com.hotelbookingsystem.bookingService.repository.RoomRepository;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @PostMapping
    public Room createRoom(@RequestBody Room room) {
        return roomRepository.save(room);
    }

    @GetMapping("{id}")
    public ResponseEntity<Room> getRoomById(@PathVariable Long id) {
        Room room = roomRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Room not found with id: " + id)
        );
        return ResponseEntity.ok(room);
    }

    @PutMapping("{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable Long id, @RequestBody Room roomDetails) {
        Room updatedRoom = roomRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Room not found with id: " + id)
        );

        updatedRoom.setRoomType(roomDetails.getRoomType());
        updatedRoom.setPrice(roomDetails.getPrice());
        updatedRoom.setNumberOfBeds(roomDetails.getNumberOfBeds());
        updatedRoom.setAmenities(roomDetails.getAmenities());

        roomRepository.save(updatedRoom);
        return ResponseEntity.ok(updatedRoom);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRoom(@PathVariable Long id) {
        Room room = roomRepository.findById(id).orElseThrow(
                () -> new ResourseNotFoundExeption("Room not found with id: " + id)
        );
        roomRepository.delete(room);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
