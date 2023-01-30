import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Oferts1 from "./components/Oferts1";
import Oferts2 from "./components/Oferts2";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greeting="Principal"/>} />
        <Route path="/ItemListContainer" element={<ItemListContainer />} />
        <Route path="/Oferts1" element={<Oferts1 />} />
        <Route path="/Oferts2" element={<Oferts2 />} />
        <Route render={() => <h1>Not found!</h1>} />
      </Routes>
    </>
  );
}

export default App;
