import { useParams, NavLink } from "react-router-dom";
import {
  Flex,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  SimpleGrid,
} from "@chakra-ui/react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const prods = getFirestore();
    const cats = getFirestore();
    const itemCollectionP = collection(prods, "productos");
    const itemCollectionC = collection(cats, "categoria");
    getDocs(itemCollectionP).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(docs);
    });
    getDocs(itemCollectionC).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategorias(docs);
    });
  }, []);

  const categories = categorias
    .map((x) => x.nombre)
    .sort()
    .reverse();
  const filtro = productos.filter((c) => c.category === category);

  return (
    <>
      <Flex m={50}>
        <Container maxW="xlg">
          <Tabs align="center" variant="enclosed">
            <TabList>
              {categories.map((cat, ind) => (
                <Tab
                  key={ind}
                  _selected={{
                    color: "white",
                    bg: "#cdb4db",
                  }}
                >
                  <NavLink to={`/categoria/${cat}`}>{cat}</NavLink>
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {categories.map((cat, ind) => {
                if (cat === "Todas") {
                  return (
                    <div key={ind}>
                      <TabPanel key={ind}>
                        <SimpleGrid templateColumns="repeat(auto-fill, minmax(400px, 3fr))">
                          <ItemList productos={productos} />
                        </SimpleGrid>
                      </TabPanel>
                    </div>
                  );
                } else {
                  return (
                    <div key={ind}>
                      <TabPanel key={ind}>
                        <SimpleGrid templateColumns="repeat(auto-fill, minmax(400px, 3fr))">
                          <ItemList productos={filtro} />
                        </SimpleGrid>
                      </TabPanel>
                    </div>
                  );
                }
              })}
            </TabPanels>
          </Tabs>
        </Container>
      </Flex>
    </>
  );
};

export default ItemListContainer;
