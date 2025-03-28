const { QueryTypes, where } = require('sequelize');
const dbModel = require('../models/db');
const { INSERT } = require('sequelize/lib/query-types');
const { products } = dbModel
dbModel.sequelize.sync();


const getProductbyID = async (req, res) => {
    let id = req.params.id;
    let data_ = await products.findOne({
        where: {
            product_id: id
        }
    });
    res.json({
        'status': 'ok',
        'data': data_
    });
};

const getProduct = async (req, res) => {
    try {
        let data_ = await products.findAll();
        res.json({
            'status': 'ok',
            'data': data_
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message // ✅ แก้ให้แสดงข้อความผิดพลาด
        });
    }
};

const insertProduct = async (req, res) => {
    let body = req.body;
    console.log("id category",body.category_id)
    try {
        await products.create({
            product_name: body.product_name,
            description: body.description, // ✅ แก้การสะกดผิดจาก 'desciption'
            category_id: body.category_id,
            unit_price: body.unit_price,
            quantity: body.quantity
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

const updateProduct = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    try {
        const updatedata = await products.update({
            product_name: body.product_name,
            description: body.description, // ✅ แก้การสะกดผิดจาก 'desciption'
            category_id: body.category_id,
            unit_price: body.unit_price,
            quantity: body.quantity
        },
        {
            where: {
                product_id: id
            }
        });

        if (updatedata[0] == 1) {
            res.status(200).json({
                'status': 'ok',
                'message': 'update successfully' // ✅ แก้คำว่า 'sucsessfully' เป็น 'successfully'
            });
        } else {
            res.status(500).json({
                'message': 'update error'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message // ✅ แก้ให้แสดงข้อความผิดพลาด
        });
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteData = await products.destroy({
            where: {
                product_id: id
            }
        });
        if (deleteData) {
            res.json({
                'status': 'ok', 
                'message': 'Successfully deleted' // ✅ แก้คำว่า 'sucsessfully' เป็น 'successfully'
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'Product not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message // ✅ แก้ให้แสดงข้อความผิดพลาด
        });
    }
};

module.exports = {
    getProductbyID,
    insertProduct,
    getProduct,
    updateProduct,
    deleteProduct
};