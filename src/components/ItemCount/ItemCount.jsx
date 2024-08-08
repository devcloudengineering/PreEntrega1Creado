import { useState } from "react";
import PropTypes from "prop-types";

function ItemCount({ initialValue = 1, stock, onAdd }) {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };
  const increment = () => {
    if (count < stock) {
      setCount((count) => count + 1);
    }
  };

  return (
    <>
      <h1 className="italic text-center mb-2">Cantidad : {count}</h1>
      <section className="flex gap-4">
        <button
          className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110"
          onClick={decrement}
        >
          Decrementar
        </button>
        <button
          className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
        <button
          className="bg-lime-300 px-2 py-1 rounded italic transition-all hover:text-white hover:scale-110"
          onClick={increment}
        >
          Incrementar
        </button>
      </section>
    </>
  );
}

ItemCount.propTypes = {
  initialValue: PropTypes.number,
  stock: PropTypes.number,
  onAdd: PropTypes.any,
};

export default ItemCount;
