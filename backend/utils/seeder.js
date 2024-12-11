const products = require ('../data/product.json');
const Product = require('../models/productModel');
//  to link all enviroments variables
const path = require('path');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database')
dotenv.config({path:'config/config.env'})
connectDatabase();


const seedProducts = async() =>{
    try{
        await Product.deleteMany();
        console.log('All products deleted!')
        await Product.insertMany(products);
        console.log('All products added!')

    }catch(error){
        console.log(error.message);
    }
    // stop the program
    process.exit();
}

seedProducts();