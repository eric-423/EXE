package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.VerifyCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerifyCodeRepository extends JpaRepository<VerifyCode, Integer>{
    VerifyCode findByUser_PhoneAndCode(String phone, String code);

}
