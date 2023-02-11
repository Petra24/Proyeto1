import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} >
            <Item
              id={item.id}
              img={item.img}
              head={item.head}
              stock={item.stock}
            />
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
