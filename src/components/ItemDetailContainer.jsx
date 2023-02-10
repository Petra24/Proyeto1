import Data from "../others/data.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  return (
    <>
      <ItemDetail data={Data} />
    </>
  );
};

export default ItemDetailContainer;
