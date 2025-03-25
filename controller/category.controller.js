const { QueryTypes, where } = require('sequelize');
const categoriesModel = require('../models/categories.model');
const { INSERT } = require('sequelize/lib/query-types');
const { products, categories, Sequelize, sequelize } = categoriesModel
productsModel.sequelize.sync();



const getCategorybyID = (req, res) => { };






// const insertCategory = async (req, res) => {
//     try {
//         let {category_name, description} = req.body;
//         await categories.create({
//             category_name: category_name,
//             description: description
//         });
//         res.json({
//             status: 'ok',
//             message: 'Insert 1 row'
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: 'fail',
//             message: error.message // ✅ แก้ให้แสดงข้อความผิดพลาด
//         });
//     }
// };

const insertCategory = async (req, res) => {
    try {
        let body = req.body;
        await categories.create(body);
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


const getCategory = async(req, res) => { 
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

const updateCategory = async(req,res) => {
    let id = req.params.id
    const {category_id, category_name} = req.body
    const updatedata = await categories.update({
        category_id: category_id,
        category_name: category_name
    },
    {
        where:{
            category_id: id
        }
    })

    if(updatedata){
        res.json({
            'message': 'update sucsessfully'
        })
    }else{
        res.json({
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
            'message':'sucsfull'
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