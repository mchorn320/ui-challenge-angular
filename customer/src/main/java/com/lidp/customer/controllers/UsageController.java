package com.lidp.customer.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lidp.customer.models.Customer;
import com.lidp.customer.models.Usage;

@RestController
@RequestMapping("/api/v1/usage")
public class UsageController {
	
	@GetMapping
	public Usage list(){
		return new Usage();
	}

}
