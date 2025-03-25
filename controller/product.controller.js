const { QueryTypes } = require('sequelize');
const productsModel = require('../models/db');
const { INSERT } = require('sequelize/lib/query-types');
const { products, categories, Sequelize, sequelize } = productsModel
productsModel.sequelize.sync();




const isertProduct = (req, res) => { };

const getProduct = (req, res) => { };

const getProductID = (req, res) => { };

const updateProduct = (req, res) => { };

const deleteProduct = (req, res) => { };


module.exports = {
    isertProduct,
    getProduct,
    getProductID,
    updateProduct,
    deleteProduct
}