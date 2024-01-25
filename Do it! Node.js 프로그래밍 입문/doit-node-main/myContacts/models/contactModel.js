const mongoose = require('mongoose');

const contactsShcema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String
        },
        phone: {
            type: String,
            required: [true, "Please Input Your Phone."]
        }
    },
    {
        timestamps: true
    }
)

// 스키마 -> 모델
// mongoose.model(<Model명>, <스키마함수>);
const Contact = mongoose.model("Contact", contactsShcema);

// module로 export하기 위해 const Contact로 변수에 할당
module.exports = Contact;