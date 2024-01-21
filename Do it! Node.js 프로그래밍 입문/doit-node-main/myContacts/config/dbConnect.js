const mongoose = require('mongoose');
require('dotenv').config();

// DB 접속시 비동기 처리 필요
// async, await 방식 사용
const dbConnect = async() => {
    try {
        // DB 접속시 시간소요되므로 await
        const connect = await mongoose.connect(process.env.DB_CONNECT); 
        console.log('DB Connected!');
    } catch(err) {
        console.log(err);
    }
}

module.exports = dbConnect;