const { QueryTypes } = require('sequelize');
const productsModel = require('../models/products.model');
const { INSERT } = require('sequelize/lib/query-types');
const { products, categories, Sequelize, sequelize } = productsModel
productsModel.sequelize.sync();



const getCategorybyID = (req, res) => { };

const updateCategory = (req, res) => { };

const deleteCategory = (req, res) => { };




const isertCategory = async (req, res) => {
    try{
        let body =req.body;
        await categories.create(body)
        res.json({
            'status': 'ok',
            'message':'insert 1 row'
        });
    }catch{
        res.json({
            'status': 'fail',
            'message': error
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

module.exports = {
    isertCategory,
    getCategory,
    getCategorybyID,
    updateCategory,
    deleteCategory,

}