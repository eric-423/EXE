package com.tamtac.tamtac.repository;

import com.tamtac.tamtac.entity.ChatRoomUser;
import com.tamtac.tamtac.entity.keys.KeyChatRoomUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRoomUserRepository extends JpaRepository<ChatRoomUser, KeyChatRoomUser>{
}
