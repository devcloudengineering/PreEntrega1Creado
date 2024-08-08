import PropTypes from "prop-types";
import { useCart } from "../../hook/useCart";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  nombre,
  precio,
  descripcion,
  src,
  category,
  stock,
  id,
}) => {
  const { addItem, isInCart } = useCart();

  const handleAdd = (count) => {
    const produtObj = {
      id,
      nombre,
      precio,
      quantity: count,
    };
    addItem(produtObj);
  };
  return (
    <article className="flex flex-col justify-center items-center gap-2 my-10">
      <h1 className="italic">{nombre}</h1>
      <p className="font-sans text-lime-500 font-bold">{category}</p>
      <img src={src} className="h-[20rem] object-cover" />
      <p className="italic text-xl">{descripcion}</p>
      <p className="italic text-xl">Stock :{stock}</p>
      <h2 className="font-serif text-2xl font-semibold"> $ {precio}</h2>
      <div>
        {isInCart(id) ? (
          <Link
            className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110"
            to="/cart"
          >
            Finalizar Compra
          </Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleAdd} />
        )}
      </div>
    </article>
  );
};

ItemDetail.propTypes = {
  nombre: PropTypes.string,
  precio: PropTypes.number,
  descripcion: PropTypes.string,
  src: PropTypes.string,
  category: PropTypes.string,
  stock: PropTypes.number,
  id: PropTypes.string,
};

export default ItemDetail;
