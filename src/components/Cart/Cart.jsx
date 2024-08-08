import { Link } from "react-router-dom";
import { useCart } from "../../hook/useCart.js";
import CartItem from "../CartItem/CartItem.jsx";

const Cart = () => {
  const { cart, getTotal, totalQuantity } = useCart();
  const total = getTotal();

  if (totalQuantity === 0) {
    return (
      <h1 className="text-3xl flex items-center justify-center mt-5">
        No tienes productos en el carrito
      </h1>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3>Total: $ {total}</h3>
      <Link
        to="/checkout"
        className="inline-flex w-[8rem] flex-col  bg-lime-400 items-center justify-center rounded-md gap-2 m-2 p-2 text-black italic transition-all hover:text-white hover:scale-110 "
      >
        Comprar
      </Link>
    </div>
  );
};

export default Cart;
