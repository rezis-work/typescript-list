import { useRef } from "react";
import "./ShoppingForm.css";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export function ShoppingListForm({
  onAddItem,
}: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityInputReff = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const quantity = parseInt(quantityInputReff.current!.value);
    onAddItem(newProduct, quantity);
    inputRef.current!.value = "";
    quantityInputReff.current!.value = "";
    inputRef.current?.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="inputs"
        type="text"
        placeholder="Product Name"
        ref={inputRef}
      />
      <input
        className="inputs"
        type="number"
        placeholder="Quantity"
        ref={quantityInputReff}
      />
      <button className="btn" type="submit">
        Add Item
      </button>
    </form>
  );
}
