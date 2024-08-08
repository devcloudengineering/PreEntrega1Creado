export const productos = [
  {
    nombre: "Alimento gatito",
    precio: "$ 4.990",
    descripcion:
      "Alimento de gatito que ayuda al buen crecimiento de su mascota",
    src: "https://bestforpets.cl/tienda/9041-large_default/bravery-salmon-adult-cat.jpg",
    category: "alimento",
    stock: 10,
    id: "1",
  },
  {
    nombre: "Higiene gatito",
    precio: "$ 1.990",
    descripcion: "Pala de arena para limpiar los residuos de su mascota",
    src: "https://www.tusmascotas.cl/wp-content/uploads/2021/05/pala-azul-1.png.webp",
    category: "higiene",
    stock: 10,
    id: "2",
  },
  {
    nombre: "Shampoo gatito",
    precio: "$ 2.990",
    descripcion: "Shampoo que ayuda a reducir los pelos sueltos para gatos",
    src: "https://dojiw2m9tvv09.cloudfront.net/21067/product/7bd9f-neutro-gato-18198.jpg",
    category: "higiene",
    stock: 10,
    id: "3",
  },
  {
    nombre: "Snack gatito",
    precio: "$ 990",
    descripcion: "Snack cremoso para gatos",
    src: "https://cdn.shopify.com/s/files/1/0556/8898/6785/files/churu-gato-chicken-salmon-704611_1600x.png?v=1714140491",
    category: "alimento",
    stock: 10,
    id: "4",
  },
  {
    nombre: "Camas gatito",
    precio: "$ 12.990",
    descripcion: "Cama acolchada para gatos",
    src: "https://www.tiendamascotamania.cl/wp-content/uploads/2021/05/cama-gato.jpg",
    category: "comodidad",
    stock: 10,
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
