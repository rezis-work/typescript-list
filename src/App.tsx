// import { Greeter } from "./components/Greeter";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { useState } from "react";
import Item from "./components/modals/item";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "chicken breast", quantity: 2 },
  // ];

  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("made up to component");
    setItems([...items, { id: uuidv4(), product, quantity }]);
  };
  return (
    <>
      <div className="App">
        <ShoppingList items={items} />
        <ShoppingListForm onAddItem={addItem} />
      </div>
    </>
  );
}

export default App;
