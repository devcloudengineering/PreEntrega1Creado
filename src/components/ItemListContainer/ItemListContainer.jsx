import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../../asyncMock.js";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      getProducts()
        .then((res) => {
          setProductos(res);
        })
        .catch((err) => console.log(err));
    } else {
      getProductsByCategory(category)
        .then((res) => {
          setProductos(res);
        })
        .catch((err) => console.log(err));
    }
  }, [category]);

  return (
    <div className="container mx-auto mb-8">
      <h1 className="text-3xl italic text-center m-10">{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
};
export default ItemListContainer;
