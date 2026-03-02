package com.shopsphere.response;

import com.shopsphere.dto.OrderHistory;
import com.shopsphere.model.Cart;
import com.shopsphere.model.Product;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FunctionResponse {
    private String functionName;
    private Cart userCart;
    private OrderHistory orderHistory;
    private Product product;
}
