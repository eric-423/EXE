package com.tamtac.tamtac.service;

import com.tamtac.tamtac.dto.ChatRoomDTO;
import com.tamtac.tamtac.dto.MessageDTO;
import com.tamtac.tamtac.entity.ChatRoom;
import com.tamtac.tamtac.entity.ChatRoomUser;
import com.tamtac.tamtac.entity.Message;
import com.tamtac.tamtac.entity.User;
import com.tamtac.tamtac.exception.ResourceNotFoundException;
import com.tamtac.tamtac.repository.ChatRoomRepository;
import com.tamtac.tamtac.repository.ChatRoomUserRepository;
import com.tamtac.tamtac.repository.MessageRepository;
import com.tamtac.tamtac.repository.UserRepository;
import com.tamtac.tamtac.service.Imp.ChatServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ChatService implements ChatServiceImp {


    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ChatRoomRepository chatRoomRepository;

    @Autowired
    private ChatRoomUserRepository chatRoomUserRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public MessageDTO sendChat(int roomId, int userId, String content) {
        ChatRoom chatRoom = chatRoomRepository.findById(roomId).orElseThrow(()->new ResourceNotFoundException("Chat room not found"));

        Message message = new Message();
        message.setChatRoom(chatRoom);
        message.setSender(userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found")));
        message.setContent(content);
        message.setSendTime(new Date());
        messageRepository.save(message);

        return toMessageDTO(message);
    }

    private MessageDTO toMessageDTO(Message message){
        MessageDTO messageDTO = new MessageDTO();
        messageDTO.setId(message.getId());
        messageDTO.setContent(message.getContent());
        messageDTO.setSenderId(message.getSender().getId());
        messageDTO.setSendTime(message.getSendTime());
        return messageDTO;
    }

    private ChatRoomDTO toChatRoomDTO(ChatRoom chatRoom){
        ChatRoomDTO chatRoomDTO = new ChatRoomDTO();
        chatRoomDTO.setId(chatRoom.getId());
        chatRoomDTO.setName(chatRoom.getId());

        return chatRoomDTO;
    }

    @Override
    public List<ChatRoomDTO> getAllChatRoom(int userId) {
        User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found"));
        List<ChatRoomUser> chatRoomUsers = user.getChatRoomUserList();
        List<ChatRoomDTO> chatRoomDTOS = new ArrayList<>();

        for(ChatRoomUser chatRoomUser : chatRoomUsers){
            chatRoomDTOS.add(toChatRoomDTO(chatRoomUser.getChatRoom()));
        }

        return chatRoomDTOS;
    }

    @Override
    public List<MessageDTO> getChat(int roomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(roomId).orElseThrow(()->new ResourceNotFoundException("Chat room not found"));
        List<Message> messages = chatRoom.getMessages();
        List<MessageDTO> messageDTOS = new ArrayList<>();

        for(Message message : messages){
            messageDTOS.add(toMessageDTO(message));
        }

        return messageDTOS;
    }
}
