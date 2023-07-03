require('dotenv').config();
const{Sequelize}=require('sequelize');
const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE
  }=process.env;
const ButtonModel=require('./models/Button');

const sequelize=new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
{
    logging:false,
    native:false
})

ButtonModel(sequelize);

const {Button}=sequelize.models

module.exports={
    Button,
    sequelize
}
