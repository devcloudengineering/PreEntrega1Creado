import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Hola soy el greeting de ItemListContainer" />
    </>
  );
}

export default App;
