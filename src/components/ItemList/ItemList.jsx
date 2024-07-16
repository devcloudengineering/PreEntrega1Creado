import PropTypes from "prop-types";
import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => {
        return <Item key={producto.id} {...producto} />;
      })}
    </div>
  );
};

ItemList.propTypes = {
  productos: PropTypes.array,
};

export default ItemList;
