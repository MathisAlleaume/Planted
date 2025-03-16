import express, {Request, Response} from "express";
import sequelize from "./Model/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "./Controller/Product.controller.js";
const app = express();
const port = 3030;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.get("/products", (req: Request, res: Response) => {
  getAllProducts(req, res);
});

app.post("/products", (req: Request, res: Response) => {
  createProduct(req, res);
});

app.get("/products/:id", (req: Request, res: Response) => {
  getProductById(req, res);
});

app.put("/products/:id", (req: Request, res: Response) => {
  updateProduct(req, res);
});

app.delete("/products/:id", (req: Request, res: Response) => {
  deleteProduct(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
