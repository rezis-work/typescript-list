import Item from "./modals/item";
import "./ShoppingList.css";

interface ShoppingListProps {
  items: Item[];
}

export function ShoppingList(props: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1 className="list-heading">Shopping List</h1>
      <ul className="list-parent">
        {props.items.map((item, i) => (
          <li className="list-child" key={item.id}>
            {i + 1}) {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
