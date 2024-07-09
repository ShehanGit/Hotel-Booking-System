package com.hotelbookingsystem.bookingService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourseNotFoundExeption extends RuntimeException {
    public ResourseNotFoundExeption(String message) {
        super(message);
    }

    // Overloaded constructor to include a cause for the exception
    public ResourseNotFoundExeption(String message, Throwable cause) {
        super(message, cause);
    }
}
