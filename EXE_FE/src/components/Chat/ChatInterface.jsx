import { useState, useEffect, useRef } from 'react';
import './ChatInterface.css';
import { jwtDecode } from 'jwt-decode';
import { BASE_URL } from '../../config/api';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';



const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [roomId, setRoomId] = useState(null);
    const [client, setClient] = useState();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getUserId = async () => {
        const accessToken = localStorage.getItem('_acc');
        const decodeToken = jwtDecode(accessToken);
        setUserId(decodeToken.id);
    };

    useEffect(() => {
        getUserId();
    }, []);


    const getRoomId = async () => {
        try {
            const response = await fetch(`${BASE_URL}/chat/room?userId=${userId}`);
            const data = await response.json();
            setRoomId(data.data[0].id);
            console.log(userId)
        } catch (error) {
            console.error('Error fetching room ID:', error);
        }
    };

    useEffect(() => {
        getRoomId();
    }, [userId]);


    const sendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;
        if (newMessage.trim() && selectedUser) {
            const newMessageObj = {
                id: Date.now(),
                content: newMessage,
                senderId: userId,
                sendTime: new Date().toISOString()
            };
            setMessages(prevMessages => [...prevMessages, newMessageObj]);
            setNewMessage('');
        }
        try {
            const response = await fetch(`${BASE_URL}/chat/send?roomId=${roomId}&userId=${userId}&content=${newMessage}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        handleConnectWebSocket();
    }, []);

    const handleConnectWebSocket = async () => {
        if (client && client.connected) return;

        const socket = new SockJS(`${BASE_URL}/web-socket`);
        const newClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 2000,
            debug: function (str) {
                console.log(str);
            },
        });

        newClient.onConnect = () => {
            console.log('Connected to WebSocket');
            newClient.subscribe("/topic/chat", (message) => {
                console.log('Received message:', message);
                const receivedMessage = JSON.parse(message.body);
                setMessages(prevMessages => [...prevMessages, receivedMessage]);
            });
        };

        try {
            await newClient.activate();
            setClient(newClient);
            console.log('WebSocket client activated successfully');
        } catch (error) {
            console.error('Failed to activate WebSocket client:', error);
        }
    };





    const users = [
        { id: 1, name: 'Chat Nội Bộ ', avatar: '👤', status: 'online' },
    ];


    // const handleSendMessage = (e) => {
    //     e.preventDefault();
    //     if (newMessage.trim() && selectedUser) {
    //         const newMessageObj = {
    //             id: Date.now(),
    //             content: newMessage,
    //             senderId: userId,
    //             sendTime: new Date().toISOString()
    //         };
    //         setMessages(prevMessages => [...prevMessages, newMessageObj]);
    //         setNewMessage('');
    //     }
    // };

    const loadMessage = async () => {
        const response = await fetch(`${BASE_URL}/chat/room/chat?chatId=${roomId}`);
        const data = await response.json();
        setMessages(data.data);
    };

    useEffect(() => {
        loadMessage();
    }, [roomId]);






    return (
        <div className="chat-container">
            {/* Cột danh sách người dùng */}
            <div className="users-list">
                <div className="users-list-header">
                    <h3>Đoạn chat</h3>
                </div>
                <div className="users-list-content">
                    {users.map(user => (
                        <div
                            key={user.id}
                            className={`user-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                            onClick={() => setSelectedUser(user)}
                        >
                            <div className="user-avatar">{user.avatar}</div>
                            <div className="user-info">
                                <div className="user-name">{user.name}</div>
                                <div className={`user-status ${user.status}`}>
                                    {user.status === 'online' ? 'Đang hoạt động' : 'Không hoạt động'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Khu vực chat chính */}
            {selectedUser ? (
                <div className="chat-main">
                    <div className="chat-header">
                        <div className="selected-user">
                            <div className="user-avatar">{selectedUser.avatar}</div>
                            <div className="user-info">
                                <div className="user-name">{selectedUser.name}</div>
                                <div className={`user-status ${selectedUser.status}`}>
                                    {selectedUser.status === 'online' ? 'Đang hoạt động' : 'Không hoạt động'}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chat-messages">
                        {messages.map(message => (
                            <div
                                key={message.id}
                                className={`message ${message.senderId === userId ? 'sent' : 'received'}`}
                                style={{
                                    width: 'fit-content',
                                    alignSelf: message.senderId === userId ? 'flex-end' : 'flex-start'
                                }}
                            >
                                {message.content}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chat-input" onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Nhập tin nhắn..."
                        />
                        <button type="submit" onClick={sendMessage}>Gửi</button>
                    </form>
                </div>
            ) : (
                <div className="chat-main empty-state">
                    <p>Chọn một người để bắt đầu chat</p>
                </div>
            )}
        </div>
    );
};

export default ChatInterface;