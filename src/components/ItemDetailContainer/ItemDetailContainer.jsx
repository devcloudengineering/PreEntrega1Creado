import { useEffect, useState } from "react";
import { getProductsById } from "../../../asyncMock.js";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();
  const { id } = useParams();
  useEffect(() => {
    getProductsById(id)
      .then((res) => {
        setProducto(res);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(producto);
  return (
    <>
      <ItemDetail {...producto} />
    </>
  );
};

export default ItemDetailContainer;
