const jwt = require('jsonwebtoken');
const loginAuth = require('./controller/users.controller');

const SECRET_KEY = 'patipanarryukong'; // กำหนด SECRET_KEY ที่ใช้ร่วมกัน

const setToken = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let loginChk = await loginAuth.login(username, password); // ลบการเรียกซ้ำ

    if (loginChk) {
        let payload = {
            'username': username,
            'nameTH': 'xxxxxx',
            'role': '0',
            'timestamp': new Date().getTime()
        };

        let token = jwt.sign(payload, SECRET_KEY);
        res.json({
            'status': 'ok',
            'token': token
        });

    } else {
        res.json({
            'status': 'fail',  //  แก้ไขคำสะกดผิด
        });
    }
};

const authCheck = async (req, res, next) => {
    let token = req.headers.authorization;
    try {
        let payload = jwt.verify(token, SECRET_KEY); // กำหนด SECRET_KEY
        let userChk = await loginAuth.userCheck(payload.username);
        if (userChk) {
            next();
        } else {
            res.json({
                'status': 'fail',
                'message': 'error'
            });
        }
    } catch {
        res.json({
            'status': 'fail',
            'message': 'Unauthorized' // แก้ไขคำสะกดผิดจาก 'Unauthrize'
        });
    }
};

const getUserProfile = async (req, res) => {
    let token = req.headers.authorization;
    let payload = jwt.decode(token);
    res.json({
        'status': 'ok',
        'message': payload
    });
};

module.exports = {
    setToken,
    authCheck,
    getUserProfile
};
