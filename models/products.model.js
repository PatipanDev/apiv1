const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const dbconf = require('../dbconnecttion/mysql.config');
const models = require('./data.model');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dbconf.DB, dbconf.USER , dbconf.PASSWORD,{
        host: dbconf.HOST,
        databse: dbconf.DB,
        dbalect: dbconf.dialect
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = models.products(sequelize,Sequelize)
db.categories = models.categories(sequelize,Sequelize)

db.categories.hasMany(
    db.products,{
        foreignKey: {
            name: 'category_id', field:'catagory_id'
        }
    });

db.products.belongsTo(
    db.categories,{
        foreignKey: 'category_id'

})

module.exports = db;