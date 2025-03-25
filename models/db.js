const dbconf = require('../dbconnecttion/mysql.config');
const models = require('./data.model');
const Sequelize = require('sequelize');

// แก้ไขคำสะกดเป็น 'dialect' และใช้ 'database' แทน 'databse'
const sequelize = new Sequelize(
    dbconf.DB, dbconf.USER, dbconf.PASSWORD, {
        host: dbconf.HOST,
        database: dbconf.DB,  // เปลี่ยน 'databse' เป็น 'database'
        dialect: dbconf.dialect  // เปลี่ยน 'dbalect' เป็น 'dialect'
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = models.products(sequelize, Sequelize);
db.categories = models.categories(sequelize, Sequelize);

// แก้ไข 'catagory_id' เป็น 'category_id'
db.categories.hasMany(
    db.products, {
        foreignKey: {
            name: 'category_id',  // ใช้ 'category_id' ตามที่ถูกต้อง
            field: 'category_id'  // ใช้ 'category_id' แทน 'catagory_id'
        }
    });

db.products.belongsTo(
    db.categories, {
        foreignKey: 'category_id'  // ใช้ 'category_id' ให้ตรงกัน
    });

module.exports = db;
