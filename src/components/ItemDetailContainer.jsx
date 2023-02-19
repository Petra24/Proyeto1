import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const prods = getFirestore();
    const itemCollection = collection(prods, "productos");
    getDocs(itemCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(docs);
    });
  }, []);

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};

export default ItemDetailContainer;
