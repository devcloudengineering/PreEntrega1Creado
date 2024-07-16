import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Item = ({ id, nombre, src, precio, descripcion }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img className="h-[20rem] object-cover" src={src} alt={descripcion} />
      <h2 className="font-serif text-2xl font-semibold">{nombre}</h2>
      <span className="font-serif text-lg">{precio}</span>
      <p className="italic">{descripcion}</p>
      <Link
        to={`/detail/${id}`}
        className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110"
      >
        Ver Detalle
      </Link>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  nombre: PropTypes.string,
  src: PropTypes.object,
  precio: PropTypes.string,
  descripcion: PropTypes.string,
};

export default Item;
