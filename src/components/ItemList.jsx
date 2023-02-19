import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    < >
      {productos.map((item) => {
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
