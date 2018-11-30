package com.lidp.customer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lidp.customer.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
