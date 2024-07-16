import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import PropTypes from "prop-types";

const Navbar = ({ contador }) => {
  return (
    <>
      <nav className="bg-lime-400 h-14 flex justify-between items-center ">
        <h1 className="ml-10 text-3xl italic">AnimalsPrime</h1>
        <section className="flex items-center gap-6 text-white italic mr-10 font-semibold">
          <Link
            to="/"
            className="cursor-pointer transition-all hover:scale-150 "
          >
            Inicio
          </Link>
          <Link
            to="/category/higiene"
            className="cursor-pointer transition-all hover:scale-150 "
          >
            Higiene
          </Link>
          <Link
            to="/category/alimento"
            className="cursor-pointer transition-all hover:scale-150 "
          >
            Alimento
          </Link>
          <Link
            to="/category/comodidad"
            className="cursor-pointer transition-all hover:scale-150 "
          >
            Comodidad
          </Link>
          <CartWidget contador={contador} />
        </section>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  contador: PropTypes.number,
};

export default Navbar;
