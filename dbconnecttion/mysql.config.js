require('dotenv').config();

module.exports = {
  HOST: process.env.MSQL_HOST,
  USER: process.env.MSQL_USER,
  PASSWORD: process.env.MSQL_PASSWORD,
  DB: process.env.MSQL_DB,
  dialect: 'mysql'
};