import {Request, Response} from "express";
import Cart from "../Model/cart.model.js";

export const createCart = async (req: Request, res: Response) => {
  try {
    const {userId, content, total, status} = req.body;
    const cart = await Cart.create({userId, content, total, status});
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({message: "Error creating cart", error});
  }
};
