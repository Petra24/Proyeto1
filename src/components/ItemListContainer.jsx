import { NavLink } from "react-router-dom";
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
import Data from "../others/data";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const getData = () => {
    new Promise((resolve, reject) => {
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
      const dataFetch = await getData();
    } catch (err) {
      //console.log(err);
    }
  }

  fetchingData();

  const categories = ["Todas", "Comedor", "Oficina", "Sala", "Cocina"];

  return (
    <>
      <Flex m={50}>
        <Container maxW="xlg">
          <Tabs align="end" variant="enclosed">
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
                    <>
                      <TabPanel key={ind}>
                        <SimpleGrid templateColumns="repeat(auto-fill, minmax(400px, 3fr))">
                          <ItemList key={ind} data={Data} />
                        </SimpleGrid>
                      </TabPanel>
                    </>
                  );
                } else {
                  const filtro = Data.filter((c) => c.category === cat);
                  return (
                    <>
                      {filtro ? (
                        <TabPanel key={ind}>
                          <SimpleGrid templateColumns="repeat(auto-fill, minmax(400px, 3fr))">
                            <ItemList key={ind} data={filtro} />
                          </SimpleGrid>
                        </TabPanel>
                      ) : (
                        <TabPanel key={ind}>
                          <SimpleGrid templateColumns="repeat(auto-fill, minmax(400px, 3fr))">
                            <ItemList key={ind} data={Data} />
                          </SimpleGrid>
                        </TabPanel>
                      )}
                    </>
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
