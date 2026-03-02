package com.shopsphere.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopsphere.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {



}
