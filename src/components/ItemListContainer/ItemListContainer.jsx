import PropTypes from "prop-types";
import alimento from "../../assets/alimento.jpg";
import cama from "../../assets/cama.jpg";
import pala from "../../assets/pala.jpg";
import shampoo from "../../assets/shampoo.jpg";
import snack from "../../assets/snack.jpg";

const productos = [
  {
    nombre: "Alimento gatito",
    precio: "$ 4.990",
    descripcion:
      "Alimento de gatito que ayuda al buen crecimiento de su mascota",
    src: alimento,
  },
  {
    nombre: "Higiene gatito",
    precio: "$ 1.990",
    descripcion: "Pala de arena para limpiar los residuos de su mascota",
    src: pala,
  },
  {
    nombre: "Shampoo gatito",
    precio: "$ 2.990",
    descripcion: "Shampoo que ayuda a reducir los pelos sueltos para gatos",
    src: shampoo,
  },
  {
    nombre: "Snack gatito",
    precio: "$ 990",
    descripcion: "Snack cremoso para gatos",
    src: snack,
  },
  {
    nombre: "Camas gatito",
    precio: "$ 12.990",
    descripcion: "Cama acolchada para gatos",
    src: cama,
  },
];

const ItemListContainer = (props) => {
  return (
    <div className="container mx-auto mb-8">
      <h1 className="text-3xl italic text-center m-10">{props.greeting}</h1>
      {productos.map((producto, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center gap-2"
            key={index}
          >
            <img
              className="h-[20rem] object-cover"
              src={producto.src}
              alt={producto.descripcion}
            />
            <h2 className="font-serif text-2xl font-semibold">
              {producto.nombre}
            </h2>
            <span className="font-serif text-lg">{producto.precio}</span>
            <p className="italic">{producto.descripcion}</p>
            <button className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110">
              Ver mas
            </button>
          </div>
        );
      })}
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};
export default ItemListContainer;
