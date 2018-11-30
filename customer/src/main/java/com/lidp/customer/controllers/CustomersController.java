package com.lidp.customer.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.lidp.customer.models.Customer;
import com.lidp.customer.repositories.CustomerRepository;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomersController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@GetMapping
	public List<Customer> list(){
		return customerRepository.findAll();
		
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Customer customer) {
		customerRepository.save(customer);
	}
	
	@GetMapping("/{id}")
	public Customer get(@PathVariable("id") long id) {
		return customerRepository.getOne(id);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void delete(@PathVariable("id") long id) {
		customerRepository.deleteById(id);
	}
	
	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Object> updateCustomer(@RequestBody Customer customer, @PathVariable("id") long id) {
		Optional<Customer> optionalCustomer = customerRepository.findById(id);
		if(!optionalCustomer.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		customer.setId(id);
		customerRepository.save(customer);
		return ResponseEntity.noContent().build();
	}
	
	

}
