package com.tamtac.tamtac.service.Imp;

import com.tamtac.tamtac.dto.ChatRoomDTO;
import com.tamtac.tamtac.dto.MessageDTO;

import java.util.List;

public interface ChatServiceImp {
    MessageDTO sendChat(int roomId, int userId, String content);
    List<ChatRoomDTO> getAllChatRoom(int userId);
    List<MessageDTO> getChat(int roomId);
}
