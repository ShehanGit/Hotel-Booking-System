package com.hotelbookingsystem.bookingService.controller;

import com.hotelbookingsystem.bookingService.model.Hotel;
import com.hotelbookingsystem.bookingService.repository.HotelRepository;
import com.hotelbookingsystem.bookingService.exception.ResourseNotFoundExeption;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.net.MalformedURLException;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    private final Path fileStorageLocation = Paths.get("C:\\Projects\\Hotel-Booking-System\\backend\\bookingService\\bookingService\\src\\main\\java\\com\\hotelbookingsystem\\bookingService\\images");

    public HotelController() {
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Hotel> createHotel(@RequestParam("name") String name,
                                             @RequestParam("location") String location,
                                             @RequestParam("description") String description,
                                             @RequestParam("rating") Double rating,
                                             @RequestParam("latitude") Double latitude,
                                             @RequestParam("longitude") Double longitude,
                                             @RequestParam("address") String address,
                                             @RequestParam("city") String city,
                                             @RequestParam("state") String state,
                                             @RequestParam("country") String country,
                                             @RequestParam("postalCode") String postalCode,
                                             @RequestParam("image") MultipartFile file) {
        try {
            String fileName = storeFile(file);
            Hotel newHotel = new Hotel(null, name, location, description, rating, latitude, longitude, address, city, state, country, postalCode, fileName);
            hotelRepository.save(newHotel);
            return ResponseEntity.ok(newHotel);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(() -> new ResourseNotFoundExeption("Hotel not found with id: " + id));
        return ResponseEntity.ok(hotel);
    }

    @PutMapping("{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel hotelDetails) {
        Hotel existingHotel = hotelRepository.findById(id).orElseThrow(() -> new ResourseNotFoundExeption("Hotel not found with id: " + id));
        existingHotel.setHotelName(hotelDetails.getHotelName());
        existingHotel.setLocation(hotelDetails.getLocation());
        existingHotel.setDescription(hotelDetails.getDescription());
        existingHotel.setRating(hotelDetails.getRating());
        existingHotel.setLatitude(hotelDetails.getLatitude());
        existingHotel.setLongitude(hotelDetails.getLongitude());
        existingHotel.setAddress(hotelDetails.getAddress());
        existingHotel.setCity(hotelDetails.getCity());
        existingHotel.setState(hotelDetails.getState());
        existingHotel.setCountry(hotelDetails.getCountry());
        existingHotel.setPostalCode(hotelDetails.getPostalCode());
        hotelRepository.save(existingHotel);
        return ResponseEntity.ok(existingHotel);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteHotel(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(() -> new ResourseNotFoundExeption("Hotel not found with id: " + id));
        hotelRepository.delete(hotel);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private String storeFile(MultipartFile file) {
        try {
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return fileName;
        } catch (Exception ex) {
            throw new RuntimeException("Could not store file " + file.getOriginalFilename() + ". Please try again!", ex);
        }
    }

    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return ResponseEntity.ok().body(resource);
            } else {
                throw new ResourseNotFoundExeption("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new ResourseNotFoundExeption("File not found " + fileName, ex);
        }
    }
}
