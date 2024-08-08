import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ItemList from "../ItemList/ItemList.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index.js";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const collectionRef = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");
    getDocs(collectionRef)
      .then((querySnapshot) => {
        //console.log(response)
        const productos = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProductos(productos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
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
