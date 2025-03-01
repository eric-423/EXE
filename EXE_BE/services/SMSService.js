const axios = require('axios');
require('dotenv').config();

const sendSms = async (code, toPhone) => {

    const key = process.env.SMS_KEY
    const url = `https://${process.env.SMS_HOST}/${process.env.SMS_PATH}`;
    console.log(url);

    const headers = {
        'Authorization': 'App ' + key,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    const phone = '84' + toPhone
    console.log(phone);

    const body = {
        "messages": [
            {
                "destinations": [{ "to": phone }],
                "from": "447491163443",
                "text": "Cảm ơn vì đã sử dụng dịch vụ Tấm Tắc, mã kích hoạt của bạn là: " + code
            }
        ]
    };

    const response = await axios.post(url, body, { headers }).then(response => {
        console.log(response.data);
    })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });
}

module.exports = { sendSms }