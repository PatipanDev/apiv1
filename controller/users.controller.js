const { and, or,Op } = require('sequelize')
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
    if(data_){
        return true;
    }else{
        return false;
    }
};

const userCheck = async (username) =>{
    let data_ = await users.findOne({
        where: {
            username: username 
        }
    });
    if(data_){
        return true;
    }else{
        return false;
    }
}

module.exports = { login, userCheck}
