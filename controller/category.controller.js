const { QueryTypes, where } = require('sequelize');
const dbModel = require('../models/db');
const { INSERT } = require('sequelize/lib/query-types');
const {categories} = dbModel
dbModel.sequelize.sync();



const getCategorybyID = async (req, res) => { 
    let id = req.params.id
    let data_ = await categories.findOne({
        where:{
            category_id: id
        }
    });
    res.json({
        'status': 'ok',
        'data': data_
    })
};




const getCategory = async(req, res) => { 
    try{
        let data_ = await categories.findAll({
        });
        res.json({
            'status': 'ok', 
            'data': data_
        })
    }catch{
        res.status(500).json({
            status: 'fail',
            message:error.message
        })
    }
    
};

const insertCategory = async (req, res) => {
    let body = req.body;
    try {
        await categories.create({
            category_name: body.category_name,
            description: body.description
        });
        res.json({
            status: 'ok',
            message: 'Insert 1 row'
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message // ✅ แก้ให้แสดงข้อความผิดพลาด
        });
    }
};

const updateCategory = async(req,res) => {
    let id = req.params.id
    let body = req.body
    const updatedata = await categories.update({
        category_name: body.category_name,
        description: body.description
    },
    {
        where:{
            category_id: id
        }
    })
    if(updatedata[0] == 1 ){
        res.status(200).json({
            'status': 'ok',
            'message': 'update sucsessfully'
        })
    }else{
        res.status(500).json({
            'message': 'update error'
        })
    } 
}

const deleteCategory = async (req, res) => { 
    const id = req.params.id
    const deleteData = await categories.destroy({
        where:{
            category_id: id
        }
    })
    if(deleteData){
        res.json({
            'message':'sucsessfully'
        })
    }
};

module.exports = {
    insertCategory,
    getCategory,
    getCategorybyID,
    updateCategory,
    deleteCategory,
}