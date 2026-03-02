package com.shopsphere.service;

import com.shopsphere.model.Seller;
import com.shopsphere.model.SellerReport;

public interface SellerReportService {
    SellerReport getSellerReport(Seller seller);
    SellerReport updateSellerReport( SellerReport sellerReport);

}
