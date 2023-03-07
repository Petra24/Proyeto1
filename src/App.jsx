import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Oferts1 from "./components/Oferts1";
import Oferts2 from "./components/Oferts2";
import Buys from "./components/Buys";
import ItemListContainer from "./components/ItemListContainer";
import { CartContext } from "./context/CartContex";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home greeting="Principal" />} />

          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route
            exact
            path="/categoria/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/buys" element={<Buys />} />

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
    </CartContext.Provider>
  );
}

export default App;
