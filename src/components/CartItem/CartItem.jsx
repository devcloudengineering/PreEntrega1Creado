import { useCart } from "../../hook/useCart.js";
import PropTypes from "prop-types";

const CartItem = ({ id, nombre, quantity, precio }) => {
  const { removeItem } = useCart();
  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <section className="flex items-center justify-between w-full max-w-md p-4 bg-lime-200 border border-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 m-2 mt-10">
      <article className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-green-800">{nombre}</h2>
        <p className="text-sm text-gray-700">Cantidad: {quantity}</p>
        <p className="text-sm text-gray-700">Precio x unidad: $ {precio}</p>
        <p className="text-sm font-semibold text-green-800">
          Subtotal: $ {precio * quantity}
        </p>
      </article>
      <button
        className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors duration-300 "
        onClick={() => handleRemove(id)}
      >
        ❌
      </button>
    </section>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  precio: PropTypes.number.isRequired,
};

export default CartItem;
