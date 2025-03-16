import Product from "../Model/product.model.js";
import {Request, Response} from "express";

export const createProduct = async (req: Request, res: Response) => {
  const {name, price, description, image} = req.body;
  const product = await Product.create({
    name,
    price,
    description,
    image,
  });
  res.json(product);
};

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll();
  res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
  const {id} = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({message: "Product not found"});
  }
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {name, price, description, image} = req.body;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({message: "Product not found"});
  }
  await product.update({
    name,
    price,
    description,
    image,
  });
  res.json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const {id} = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    return res.status(404).json({message: "Product not found"});
  }
  await product.destroy();
  res.json({message: "Product deleted"});
};
