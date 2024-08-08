import Cart from "../../assets/Cart.png";
import PropTypes from "prop-types";
import { useCart } from "../../hook/useCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <Link to="/cart">
      <div className="flex">
        <img className="h-10" src={Cart} alt="carrito de compras" />
        <span className="bg-red-700 rounded-full flex h-4 items-center  text-xs px-[4px] text-white relative right-3 top-2">
          {totalQuantity}
        </span>
      </div>
    </Link>
  );
};

CartWidget.propTypes = {
  contador: PropTypes.number,
};
export default CartWidget;
