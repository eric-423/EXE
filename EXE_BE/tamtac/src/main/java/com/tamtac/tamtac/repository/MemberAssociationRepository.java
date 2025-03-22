package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.MemberAssociation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberAssociationRepository extends JpaRepository<MemberAssociation, Integer> {

}
