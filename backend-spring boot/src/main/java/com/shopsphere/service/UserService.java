package com.shopsphere.service;

import com.shopsphere.exception.UserException;
import com.shopsphere.model.User;

public interface UserService {

	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;


}
