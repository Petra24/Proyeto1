import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer nav="true"/>
    </>
  );
}

export default App;
