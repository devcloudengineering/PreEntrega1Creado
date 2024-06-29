import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <Navbar contador={counter} setContador={setCounter} />
      <ItemListContainer greeting="Bienvenidos a AnimalsPrime" />
    </>
  );
}

export default App;
