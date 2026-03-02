package com.shopsphere.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopsphere.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
