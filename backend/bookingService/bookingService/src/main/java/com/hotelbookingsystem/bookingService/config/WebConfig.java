package com.hotelbookingsystem.bookingService.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // URL path "/images/**"
        // Local directory path "file:///path/to/your/images/"
        registry.addResourceHandler("/images/**")
                .addResourceLocations("C:\\Projects\\Hotel-Booking-System\\backend\\bookingService\\bookingService\\src\\main\\resources\\hotelimages");
    }
}
