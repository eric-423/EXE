package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.PromotionDTO;
import com.tamtac.tamtac.repository.PromotionRepository;
import com.tamtac.tamtac.service.Imp.PromotionServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PromotionService implements PromotionServiceImp {

    @Autowired
    private PromotionRepository promotionRepository;

    @Override
    public List<PromotionDTO> getAllPromotionsOfCustomer(int customerId) {
        return List.of();
    }

    @Override
    public List<PromotionDTO> getAllPromotion() {
        return List.of();
    }

    @Override
    public PromotionDTO createPromotion(PromotionDTO promotionDTO) {
        return null;
    }

    @Override
    public PromotionDTO updatePromotion(int id, PromotionDTO promotionDTO) {
        return null;
    }
}
