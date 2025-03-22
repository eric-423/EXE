package com.tamtac.tamtac.controller;


import com.tamtac.tamtac.payload.ResponseData;
import com.tamtac.tamtac.service.Imp.ChatServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatServiceImp chatServiceImp;

    @Autowired
    SimpMessagingTemplate messagingTemplate;

    @PostMapping("/send")
    @SendTo("/topic/chat")
    public ResponseEntity<?> sendChat(@RequestParam int roomId, @RequestParam int userId, @RequestParam String content) {
        try {
        ResponseData responseData = new ResponseData();
        responseData.setData(chatServiceImp.sendChat(roomId,userId,content));
        messagingTemplate.convertAndSend("/topic/chat", content + "|" + userId+ "|" + roomId);
        return new ResponseEntity<>(responseData, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error sending message: " + e.getMessage());
        }
    }

    @GetMapping("/room")
    public ResponseEntity<?> getChatRoom(@RequestParam int userId) {
        ResponseData responseData = new ResponseData();
        responseData.setData(chatServiceImp.getAllChatRoom(userId));
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }

    @GetMapping("/room/chat")
    public ResponseEntity<?>getChat(@RequestParam int chatId){
        ResponseData responseData = new ResponseData();
        responseData.setData(chatServiceImp.getChat(chatId));
        return new ResponseEntity<>(responseData, HttpStatus.OK);
    }
}
