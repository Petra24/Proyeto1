import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Oferts1 from "./components/Oferts1";
import Oferts2 from "./components/Oferts2";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home greeting="Principal" />} />

        <Route exact path="/Productos" element={<ItemListContainer />} />
        <Route exact path="/Categoria/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />

        <Route
          exact
          path="/Oferts1"
          element={<Oferts1 greeting="Super Ofertas" />}
        />
        <Route
          exact
          path="/Oferts2"
          element={<Oferts2 greeting="Mega Ofertas" />}
        />
        <Route exact render={() => <h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
