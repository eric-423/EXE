const axios = require('axios');

async function callGenerateContent(subtitle, detail) {
    const apiKey = 'AIzaSyDdVXS-R6Ou__puohL1rJxfLwCe3QRDf6E';
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

    const body = {
        contents: [{
            parts: [{
                text: `Tôi là doanh nghiệp bán cơm tấm, bạn hãy đọc tiêu đề và nội dung email tôi gửi ở đây xem có liên quan đến doanh nghiệp không, mấy cái liên quan đến doanh nghiệp kiểu như giá cả, thời gian làm việc này nọ ... tôi nghĩ bạn đủ thông minh để hiểu và chỉ trả lời true false thôi nha? \n Tiêu đề: ${subtitle} \n Nội Dung: ${detail}`
            }]
        }]
    };

    try {
        const response = await axios.post(url, body, {
            params: {
                key: apiKey,
            },
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error calling generateContent:', error);
        throw error;
    }
}

module.exports = callGenerateContent