package com.tamtac.tamtac.service;

import com.tamtac.tamtac.config.payment.vnpay.VNPayConfig;
import com.tamtac.tamtac.dto.PaymentDTO;
import com.tamtac.tamtac.entity.Order;
import com.tamtac.tamtac.service.Imp.VNPayServiceImp;
import com.tamtac.tamtac.untils.VNPayUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class VNPayService implements VNPayServiceImp {


    private final VNPayConfig vnPayConfig;

    @Override
    public String createVnPayPayment(HttpServletRequest request, Order order) {
        int amount = (int)order.getAmount()*100;
        String bankCode = "NCB";
        Map<String, String> vnpParamsMap = vnPayConfig.getVNPayConfig();
        vnpParamsMap.put("vnp_Amount", String.valueOf(amount));

        vnpParamsMap.put("vnp_BankCode", bankCode);

        String newReturnUrl = vnpParamsMap.get("vnp_ReturnUrl") + "?orderId=" + order.getId();
        vnpParamsMap.put("vnp_ReturnUrl", newReturnUrl);

        vnpParamsMap.put("vnp_IpAddr", VNPayUtil.getIpAddress(request));

        String queryUrl = VNPayUtil.getPaymentURL(vnpParamsMap, true);
        String hashData = VNPayUtil.getPaymentURL(vnpParamsMap, false);
        String vnpSecureHash = VNPayUtil.hmacSHA512(vnPayConfig.getSecretKey(), hashData);
        queryUrl += "&vnp_SecureHash=" + vnpSecureHash;
        return  vnPayConfig.getVnp_PayUrl() + "?" + queryUrl;
    }
}
