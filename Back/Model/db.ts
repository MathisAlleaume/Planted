import {Sequelize, Dialect} from "sequelize";
import dotenv from "dotenv";
import Cart from "./cart.model.js";
import Product from "./product.model.js";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({force: false});
    console.log("All models were synchronized successfully.");
    await Product.bulkCreate(plantsSeed);
    console.log("Plants were seeded successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const plantsSeed = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    description:
      "Plante tropicale aux grandes feuilles perforées, facile d’entretien et idéale pour une touche exotique.",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ficus Lyrata",
    description:
      "Avec ses larges feuilles vert foncé, cette plante apporte une ambiance moderne et élégante à votre intérieur.",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1619602707513-05a6ef9e3bd1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Pilea Peperomioides",
    description:
      "Aussi appelée 'plante à monnaie chinoise', elle est appréciée pour ses feuilles rondes et son entretien facile.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1601404294583-bb2f4510c357?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Calathea Orbifolia",
    description:
      "Une plante au feuillage décoratif qui se referme la nuit et purifie l’air ambiant.",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1687166752260-c423a780289b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Sansevieria Trifasciata",
    description:
      "Connue sous le nom de 'Langue de belle-mère', elle est ultra résistante et absorbe les toxines de l’air.",
    price: 20,
    image:
      "https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Philodendron Scandens",
    description:
      "Plante grimpante au feuillage en forme de cœur, parfaite pour créer un effet jungle chez soi.",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1602573852058-ef7c665fcd92?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Alocasia Polly",
    description:
      "Avec ses feuilles nervurées uniques, cette plante est un véritable bijou végétal pour les amateurs de plantes exotiques.",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1701266780639-d1471199cde0?q=80&w=2310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Lavande Officinale",
    description:
      "Idéale pour parfumer délicatement votre intérieur et apporter une touche méditerranéenne.",
    price: 12,
    image:
      "https://plus.unsplash.com/premium_photo-1668285596679-bdf9a2d323b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Cactus Euphorbia",
    description:
      "Une plante graphique et facile à entretenir, parfaite pour les amateurs de minimalisme.",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default sequelize;
