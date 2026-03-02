package com.shopsphere.service;

import com.shopsphere.model.Order;
import com.shopsphere.model.Seller;
import com.shopsphere.model.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction createTransaction(Order order);
    List<Transaction> getTransactionBySeller(Seller seller);
    List<Transaction>getAllTransactions();
}
