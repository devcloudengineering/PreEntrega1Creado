import { useState, useEffect } from "react";
import { useCart } from "../../hook/useCart.js";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();

  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const createOrder = async () => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          firstName: "Gustavo",
          lastName: "Figueroa",
          phone: "87761275",
          address: "La Florida",
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };

      const ids = cart.map((item) => item.id);

      const productRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { stock: stockDB - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        console.log(`El id de su orden es ${orderAdded.id}`);

        setOrderData({ id: orderAdded.id, ...objOrder });
        setOrderCreated(true);
        clearCart();
      } else {
        console.log("Hay productos que están fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderCreated) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, [orderCreated, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative max-w-md mx-auto shadow-lg">
          <strong className="font-bold">Procesando...</strong>
          <span className="block sm:inline"> Se está generando la orden.</span>
        </div>
      </div>
    );
  }

  if (orderCreated && orderData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md mx-auto shadow-lg">
          <strong className="font-bold">¡Éxito! </strong>
          <span className="block sm:inline">
            La orden fue creada correctamente. Gracias por comprar !!!
          </span>
          <div className="mt-4">
            <p>
              <strong>ID de la Orden:</strong> {orderData.id}
            </p>
            <p>
              <strong>Nombre:</strong> {orderData.buyer.firstName}{" "}
              {orderData.buyer.lastName}
            </p>
            <p>
              <strong>Teléfono:</strong> {orderData.buyer.phone}
            </p>
            <p>
              <strong>Dirección:</strong> {orderData.buyer.address}
            </p>
            <p>
              <strong>Total:</strong> ${orderData.total}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <div className="grid gap-6">
          {cart.map((item) => (
            <article key={item.id} className="bg-lime-300 p-4 rounded-md">
              <header>
                <h2 className="text-lg font-semibold">
                  Producto: {item.nombre}
                </h2>
                <span className="text-sm badge">Cantidad: {item.quantity}</span>
              </header>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center">
          <button
            className="inline-flex w-full bg-lime-400 items-center justify-center rounded-md p-3 text-black italic transition-all hover:text-white hover:scale-110"
            onClick={createOrder}
          >
            Generar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
