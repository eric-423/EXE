package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.entity.Order;

public interface PdfFileServiceImp {
    String createInvoice(Order order);
}
