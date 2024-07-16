import alimento from "./src/assets/alimento.jpg";
import cama from "./src/assets/cama.jpg";
import pala from "./src/assets/pala.jpg";
import shampoo from "./src/assets/shampoo.jpg";
import snack from "./src/assets/snack.jpg";

export const productos = [
  {
    nombre: "Alimento gatito",
    precio: "$ 4.990",
    descripcion:
      "Alimento de gatito que ayuda al buen crecimiento de su mascota",
    src: alimento,
    category: "alimento",
    id: "1",
  },
  {
    nombre: "Higiene gatito",
    precio: "$ 1.990",
    descripcion: "Pala de arena para limpiar los residuos de su mascota",
    src: pala,
    category: "higiene",
    id: "2",
  },
  {
    nombre: "Shampoo gatito",
    precio: "$ 2.990",
    descripcion: "Shampoo que ayuda a reducir los pelos sueltos para gatos",
    src: shampoo,
    category: "higiene",
    id: "3",
  },
  {
    nombre: "Snack gatito",
    precio: "$ 990",
    descripcion: "Snack cremoso para gatos",
    src: snack,
    category: "alimento",
    id: "4",
  },
  {
    nombre: "Camas gatito",
    precio: "$ 12.990",
    descripcion: "Cama acolchada para gatos",
    src: cama,
    category: "comodidad",
    id: "5",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductsById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
