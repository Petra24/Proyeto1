import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Flex,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import data from "../others/data";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [value, setValue] = useState(0);

  const getData = () => {
    new Promise((resolve, reject) => {
      if (data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(data);
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

  let filtro;
  if (value === 0) {
    return (
      <>
        <Flex m={50}>
          <Container maxW="xlg">
            <Tabs
              onChange={() => setValue(value)}
              align="end"
              variant="enclosed"
            >
              <TabList>
                <NavLink to={`/Categoria/Todas}`}>
                  <Tab _selected={{ color: "white", bg: "blue.500" }}>
                    Todas
                  </Tab>
                </NavLink>
                <NavLink to={`/Categoria/Comedor}`}>
                  <Tab _selected={{ color: "white", bg: "blue.500" }}>
                    Comedor
                  </Tab>
                </NavLink>
                <NavLink to={`/Categoria/Oficina}`}>
                  <Tab _selected={{ color: "white", bg: "blue.500" }}>
                    Oficina
                  </Tab>
                </NavLink>
                <NavLink to={`/Categoria/Sala}`}>
                  <Tab _selected={{ color: "white", bg: "blue.500" }}>Sala</Tab>
                </NavLink>
                <NavLink to={`/Categoria/Cocina}`}>
                  <Tab _selected={{ color: "white", bg: "blue.500" }}>
                    Cocina
                  </Tab>
                </NavLink>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ItemList data={data} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Container>
        </Flex>
      </>
    );
  } else {
    switch (value) {
      case 1:
        filtro = data.filter((cat) => cat.category === "Comedor");
        return (
          <>
            <Flex m={50}>
              <Container maxW="xlg">
                <Tabs
                  onChange={(val) => setValue(val)}
                  align="end"
                  variant="enclosed"
                >
                  <TabList>
                    <NavLink to={`/Categoria/Todas}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Todas
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Comedor}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Comedor
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Oficina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Oficina
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Sala}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Sala
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Cocina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Cocina
                      </Tab>
                    </NavLink>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      {filtro ? (
                        <ItemList data={filtro} />
                      ) : (
                        <ItemList data={data} />
                      )}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Container>
            </Flex>
          </>
        );
        break;
      case 2:
        filtro = data.filter((cat) => cat.category === "Oficina");
        return (
          <>
            <Flex m={50}>
              <Container maxW="xlg">
                <Tabs
                  onChange={() => setValue(value + 2)}
                  align="end"
                  variant="enclosed"
                >
                  <TabList>
                    <NavLink to={`/Categoria/Todas}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Todas
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Comedor}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Comedor
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Oficina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Oficina
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Sala}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Sala
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Cocina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Cocina
                      </Tab>
                    </NavLink>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      {filtro ? (
                        <ItemList data={filtro} />
                      ) : (
                        <ItemList data={data} />
                      )}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Container>
            </Flex>
          </>
        );
        break;
      case 3:
        filtro = data.filter((cat) => cat.category === "Sala");
        return (
          <>
            <Flex m={50}>
              <Container maxW="xlg">
                <Tabs
                  onChange={(val) => setValue(val)}
                  align="end"
                  variant="enclosed"
                >
                  <TabList>
                    <NavLink to={`/Categoria/Todas}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Todas
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Comedor}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Comedor
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Oficina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Oficina
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Sala}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Sala
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Cocina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Cocina
                      </Tab>
                    </NavLink>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      {filtro ? (
                        <ItemList data={filtro} />
                      ) : (
                        <ItemList data={data} />
                      )}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Container>
            </Flex>
          </>
        );
        break;
      case 4:
        filtro = data.filter((cat) => cat.category === "Cocina");
        return (
          <>
            <Flex m={50}>
              <Container maxW="xlg">
                <Tabs
                  onChange={(val) => setValue(val)}
                  align="end"
                  variant="enclosed"
                >
                  <TabList>
                    <NavLink to={`/Categoria/Todas}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Todas
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Comedor}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Comedor
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Oficina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Oficina
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Sala}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Sala
                      </Tab>
                    </NavLink>
                    <NavLink to={`/Categoria/Cocina}`}>
                      <Tab _selected={{ color: "white", bg: "blue.500" }}>
                        Cocina
                      </Tab>
                    </NavLink>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      {filtro ? (
                        <ItemList data={filtro} />
                      ) : (
                        <ItemList data={data} />
                      )}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Container>
            </Flex>
          </>
        );
        break;
    }
  }
};

export default ItemListContainer;
