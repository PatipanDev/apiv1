const { and, or, Op } = require('sequelize')
const usersModel = require('../models/users.model');
const { users } = usersModel
usersModel.sequelize.sync()

const login = async (username, password) => {
    let data_ = await users.findOne({
        where: {
            [Op.and]: [{ username: username },
            { password: password }
            ]
            ,
        }
    });
    if (data_) {
        return true;
    } else {
        return false;
    }
};

const userCheck = async (username) => {
    let data_ = await users.findOne({
        where: {
            username: username
        }
    });
    if (data_) {
        return true;
    } else {
        return false;
    }
}

const register = async (req, res) => {
    let useraccout = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        nameTH: req.body.nameTH,
        nameEN: req.body.nameEN,
        role: req.bosy.role
    };
    let hasUser = await userCheck(useraccout.username);
    //ถ้าไม่ซ้ำ
    if (!hasUser) {
        await users.create(useraccout)
        res.json({
            'status': 'ok',
            'message': 'insert new user.'
        })
    } else {
        res.json({
            'status': 'fail',
            'message': 'Dupicated user.'
        })
    }
}

module.exports = { login, userCheck, register }
