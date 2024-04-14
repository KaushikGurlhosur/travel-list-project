/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      return;
    }

    const newItem = {
      quantity,
      description,
      packed: false,
      id: Math.floor(Math.random() * 99),
    };
    console.log(newItem);

    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="Item Description"
        type="text"
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
