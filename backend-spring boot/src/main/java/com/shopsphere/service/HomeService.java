package com.shopsphere.service;

import com.shopsphere.model.Home;
import com.shopsphere.model.HomeCategory;

import java.util.List;

public interface HomeService {

    Home creatHomePageData(List<HomeCategory> categories);

}
