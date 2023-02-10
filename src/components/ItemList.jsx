import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Item
              id={item.id}
              img={item.img}
              head={item.head}
              stock={item.stock}
            />
          </>
        );
      })}
    </>
  );
};

export default ItemList;
