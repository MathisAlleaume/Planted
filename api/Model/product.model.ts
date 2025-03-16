import {DataTypes} from "sequelize";
import sequelize from "./db.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "products",
  }
);

export default Product;
