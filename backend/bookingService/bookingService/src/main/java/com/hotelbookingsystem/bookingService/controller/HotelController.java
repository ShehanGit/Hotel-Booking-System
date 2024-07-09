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
                                             @RequestParam("image") MultipartFile file) {
        try {
            // Log the incoming data
            System.out.println("Received name: " + name);
            System.out.println("Received location: " + location);
            System.out.println("Received file: " + file.getOriginalFilename() + " with size: " + file.getSize());

            // Save the image
            String fileName = storeFile(file);
            Hotel newHotel = new Hotel();
            newHotel.setHotelName(name);
            newHotel.setLocation(location);
            newHotel.setImageUrl(fileName);
            hotelRepository.save(newHotel);
            return ResponseEntity.ok(newHotel);
        } catch (Exception e) {
            e.printStackTrace();  // Ensure to print the stack trace for more detailed error info
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    @GetMapping("{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new ResourseNotFoundExeption("Hotel not found with id: " + id));
        return ResponseEntity.ok(hotel);
    }

    @PutMapping("{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel hotelDetails) {
        Hotel updatedHotel = hotelRepository.findById(id)
                .orElseThrow(() -> new ResourseNotFoundExeption("Hotel not found with id: " + id));

        updatedHotel.setHotelName(hotelDetails.getHotelName());
        updatedHotel.setLocation(hotelDetails.getLocation());
        updatedHotel.setDescription(hotelDetails.getDescription());
        updatedHotel.setRating(hotelDetails.getRating());
        updatedHotel.setLatitude(hotelDetails.getLatitude());
        updatedHotel.setLongitude(hotelDetails.getLongitude());
        updatedHotel.setAddress(hotelDetails.getAddress());
        updatedHotel.setCity(hotelDetails.getCity());
        updatedHotel.setState(hotelDetails.getState());
        updatedHotel.setCountry(hotelDetails.getCountry());
        updatedHotel.setPostalCode(hotelDetails.getPostalCode());

        hotelRepository.save(updatedHotel);
        return ResponseEntity.ok(updatedHotel);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteHotel(@PathVariable Long id) {
        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new ResourseNotFoundExeption("Hotel not found with id: " + id));
        hotelRepository.delete(hotel);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private String storeFile(MultipartFile file) {
        try {
            // Normalize file name
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
