import PropTypes from "prop-types";

const ItemDetail = ({ nombre, precio, descripcion, src, category }) => {
  return (
    <article className="flex flex-col justify-center items-center gap-2 my-10">
      <h1 className="italic">{nombre}</h1>
      <p className="font-sans text-lime-500 font-bold">{category}</p>
      <img src={src} className="h-[20rem] object-cover" />
      <p className="italic text-xl">{descripcion}</p>
      <h2 className="font-serif text-2xl font-semibold">{precio}</h2>
      <button className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110">
        Comprar
      </button>
    </article>
  );
};

ItemDetail.propTypes = {
  nombre: PropTypes.string,
  precio: PropTypes.string,
  descripcion: PropTypes.string,
  src: PropTypes.string,
  category: PropTypes.string,
};

export default ItemDetail;
