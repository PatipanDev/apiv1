const { QueryTypes } = require('sequelize');
const productsModel = require('../models/products.model');
const { INSERT } = require('sequelize/lib/query-types');
const { products, categories, Sequelize, sequelize } = productsModel
productsModel.sequelize.sync();

const isertCategory = (req, res) => { };

const getCategory = (req, res) => { };

const getCategorybyID = (req, res) => { };

const updateCategory = (req, res) => { };

const deleteCategory = (req, res) => { };



const isertProduct = (req, res) => { };

const getProduct = (req, res) => { };

const getProductID = (req, res) => { };

const updateProduct = (req, res) => { };

const deleteProduct = (req, res) => { };


module.exports = {
    isertCategory,
    getCategory,
    getCategorybyID,
    updateCategory,
    deleteCategory,
    isertProduct,
    getProduct,
    getProductID,
    updateProduct,
    deleteProduct
}