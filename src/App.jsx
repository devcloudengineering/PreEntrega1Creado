import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <BrowserRouter>
        <Navbar contador={counter} setContador={setCounter} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ItemListContainer greeting="Bienvenidos a AnimalsPrime" />
            }
          />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
