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
db.users = models.users(sequelize, Sequelize);


module.exports = db;


