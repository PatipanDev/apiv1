const jwt = require('jsonwebtoken');
const loginAuth = require('./controller/users.controller')

const setToken = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let loginChk = await loginAuth.login(username, password)
    // select * from user where username'...' and password'..'
    loginAuth.login(username, password)
    if (loginChk) {
        const SECRET_KEY = 'patipanarryukong';
        let payload = {
            'username': username,
            'nameTH': 'xxxxxx',
            'role': '0',
            'timestamp': new Date().getTime()
        }

        let token = jwt.sign(payload, SECRET_KEY);
        res.json({
            'status': 'ok',
            'token': token
        })

    }else{
        res.json({
            'ststus': 'fail',
            
        })
    }



}
module.exports = {
    setToken
}
