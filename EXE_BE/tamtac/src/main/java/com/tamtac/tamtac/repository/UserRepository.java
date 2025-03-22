package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);

    User findByPhone(String phone);

    User findByRefreshToken(String refreshToken);


    List<User> findByFullNameContainsIgnoreCaseOrEmailContainsIgnoreCaseOrPhoneContainsIgnoreCaseAndIsActiveAndRoleHistories_Role_IdAndRoleHistories_IsActiveTrue(String fullName, String email, String phone, boolean isActive, int id);


    List<User>findByFullNameContainsIgnoreCaseOrEmailContainsIgnoreCaseOrPhoneContainsIgnoreCaseAndIsActive(String fullName, String email, String phone, boolean isActive);
}
