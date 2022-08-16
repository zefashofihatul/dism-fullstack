import { Op } from 'sequelize';
import model from '../models/index.js';
const Products = model;

console.log(Products);
const coba = async () => {
  console.log(await Products);
};

export default function productsDbRepositoryPostgres() {
  const findAllProducts = async () => {
    const productItems = await Products.findAll();
  };
  return {
    findAllProducts,
  };
}
