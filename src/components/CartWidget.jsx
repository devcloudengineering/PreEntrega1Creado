import Cart from "../assets/Cart.png";

const CartWidget = () => {
  return (
    <div className="flex">
      <img className="h-10" src={Cart} alt="carrito de compras" />
      <span className="bg-red-700 rounded-full flex h-4 items-center  text-xs px-[4px] text-white relative right-3 top-2">
        1
      </span>
    </div>
  );
};

export default CartWidget;
