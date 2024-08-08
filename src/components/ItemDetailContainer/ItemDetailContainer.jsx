import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../services/firebase/index.js";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const { id } = useParams();
  console.log("Producto ID:", id);
  useEffect(() => {
    getDoc(doc(db, "productos", id))
      .then((querySnapshot) => {
        if (querySnapshot.exists()) {
          console.log("El documento:", querySnapshot.data());
          const producto = {
            id: querySnapshot.id,
            ...querySnapshot.data(),
          };
          setProducto(producto);
        } else {
          console.log("Documento no existe!");
        }
      })
      .catch((err) => console.log("Error al generar el documento:", err));
  }, [id]);

  return (
    <>
      <ItemDetail {...producto} />
    </>
  );
};

export default ItemDetailContainer;
