package com.tamtac.tamtac.service.Imp;


import com.tamtac.tamtac.dto.PromotionDTO;

import java.util.List;

public interface PromotionServiceImp {
    List<PromotionDTO> getAllPromotionsOfCustomer(int customerId);
    List<PromotionDTO> getAllPromotion();
    PromotionDTO createPromotion(PromotionDTO promotionDTO);
    PromotionDTO updatePromotion(int id, PromotionDTO promotionDTO);
}
