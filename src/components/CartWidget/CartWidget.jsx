import Cart from "../../assets/Cart.png";
import PropTypes from "prop-types";

const CartWidget = ({ contador }) => {
  return (
    <div className="flex">
      <img className="h-10" src={Cart} alt="carrito de compras" />
      <span className="bg-red-700 rounded-full flex h-4 items-center  text-xs px-[4px] text-white relative right-3 top-2">
        {contador}
      </span>
    </div>
  );
};

CartWidget.propTypes = {
  contador: PropTypes.number,
};
export default CartWidget;
