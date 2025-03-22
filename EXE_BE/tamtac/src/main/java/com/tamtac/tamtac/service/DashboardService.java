package com.tamtac.tamtac.service;

import com.tamtac.tamtac.entity.Branch;
import com.tamtac.tamtac.entity.Order;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.repository.BranchRepository;
import com.tamtac.tamtac.repository.OrderRepository;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.service.Imp.DashboardServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DashboardService implements DashboardServiceImp {

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Map<String, Object> getMetrics(int branchId, Date startDate, Date endDate) {

        List<Order> ordersComplete = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Đã giao", startDate, endDate);
        List<Order> ordersCancel = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Đã hủy", startDate, endDate);
        List<Order> orderInDelivery = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Đang giao", startDate, endDate);
        List<Order> orderSuccess = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Đặt Hàng Thành Công", startDate, endDate);
        List<Order> orderWaitForPayment = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Chờ thanh toán", startDate, endDate);
        List<Order> orderWaitForDelivery = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Đang chuẩn bị", startDate, endDate);

        double totalRevenue = 0;
        Set<Integer> numberOfCustomerSet = new HashSet<>();

        for (Order order : ordersComplete) {
            totalRevenue += order.getAmount();
            numberOfCustomerSet.add(order.getCustomer().getId());
        }

        Map<String, Object> metrics = new HashMap<>();
        metrics.put("totalRevenue", totalRevenue);
        metrics.put("numberOfCustomer", numberOfCustomerSet.size());
        metrics.put("numberOfOrderComplete", ordersComplete.size());
        metrics.put("numberOfOrderCancel", ordersCancel.size());
        metrics.put("numberOfOrderInDelivery", orderInDelivery.size());
        metrics.put("numberOfOrderSuccess", orderSuccess.size());
        metrics.put("numberOfOrderWaitForPayment", orderWaitForPayment.size());
        metrics.put("numberOfOrderWaitForDelivery", orderWaitForDelivery.size());

        return metrics;
    }

    @Override
    public Map<String, Object> getAmountOfOrderPickUpAndShip(int branchId, Date startDate, Date endDate) {
        List<Order> orders = orderRepository.findByBranch_IdAndStatus_NameAndCreatedAtAfterAndCreatedAtBefore(branchId, "Đã giao", startDate, endDate);
        double amountOfShippingOrder = 0;
        double amountOfPickUpOrder = 0;

        for (Order order : orders) {
            if (order.isPickUp()) {
                amountOfPickUpOrder += order.getAmount();
            } else {
                amountOfShippingOrder += order.getAmount();
            }
        }
        Map<String, Object> result = new HashMap<>();
        result.put("amountOfShippingOrder", amountOfShippingOrder);
        result.put("amountOfPickUpOrder", amountOfPickUpOrder);
        return result;
    }




}
