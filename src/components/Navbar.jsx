import CartWidget from "../components/CartWidget.jsx";

const Navbar = () => {
  return (
    <>
      <nav className="bg-lime-400 h-14 flex justify-between items-center ">
        <div className="ml-10 text-3xl italic">AnimalsPrime</div>
        <ul className="flex items-center gap-6 text-white italic mr-10 font-semibold">
          <li className="cursor-pointer transition-all hover:scale-150 ">
            Inicio
          </li>
          <li className="cursor-pointer transition-all hover:scale-150">
            Productos
          </li>
          <li className="cursor-pointer transition-all hover:scale-150">
            Contacto
          </li>
          <li className="cursor-pointer">
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
