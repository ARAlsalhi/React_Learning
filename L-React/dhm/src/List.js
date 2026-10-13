import { useState } from "react";

export default function List() {
  const nextId = 4;
  const [orederInputVlaue, setOrederInputValue] = useState("");
  const [orders, setOrders] = useState([
    { id: 1, name: "Order 1" },
    { id: 2, name: "Order 2" },
    { id: 3, name: "Order 3" },
  ]);
  const orderListLoop = orders.map((ord) => {
    return (
      <li key={ord.id}>
        {ord.name}{" "}
        <button onClick={() => handleDeleteClick(ord.id)}>Delete</button>
      </li>
    );
  });
  function handleAddClick() {
    /* ...orders it just copy the existing orders and add the new one */

    setOrders([...orders, { id: nextId, name: orederInputVlaue }]);
  }

  function handleDeleteClick(id) {
    /* ...orders it just copy the existing orders and remove the one with the given id */
    const newOrders = orders.filter((ord) => {
      return ord.id !== id;
    });
    setOrders(newOrders);
  }

  return (
    <div>
      {orderListLoop}
      <div>
        {/*this just an input filed take anything user put it in the bar
        but how can i reach it in react by use it value which is {orederInputVlaue}
        it can be by use another function which i will name it as a handleAddClick */}

        <input
          value={orederInputVlaue}
          onChange={(event) => {
            setOrederInputValue(event.target.value);
          }}
          type="text"
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}
