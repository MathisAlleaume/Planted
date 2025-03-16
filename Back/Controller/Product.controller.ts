import Product from "../Model/product.model.js";
import {Request, Response} from "express";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {name, price, description, image} = req.body;
    const product = await Product.create({
      name,
      price,
      description,
      image,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({message: "Error creating product", error});
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({message: "Error getting products", error});
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({message: "Product not found"});
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({message: "Error getting product", error});
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    res.status(500).json({message: "Error updating product", error});
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({message: "Product not found"});
    }
    await product.destroy();
    res.json({message: "Product deleted"});
  } catch (error) {
    res.status(500).json({message: "Error deleting product", error });
  }
};
