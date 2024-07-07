import { useState } from "react";
import "./App.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 3, packed: true },
// ];

export default function App() {
  // const [items, setItems] = useState(initialItems);
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItems={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
      <Stat />
    </div>
  );
}

function Logo() {
  // to get emoji windows + .
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // we use this to prevent the page from reloading anytime we press enter
    e.preventDefault();
    console.log(e);

    // if description is empty, i want nothing to happen
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // we want the form to go back to its default state after submission
    // we simple use our setter functions, since react is in charge
    setDescription("");
    setQuantity(1);
  }

  return (
    // the handleSubmit on the form will work when will enter the the input tag and when we click on
    // the add button but when we add the event listener to the button, it only works when we click the button
    <form className="add-form" onSubmit={handleSubmit}>
      {/* OR  <form className="add-form" onClick={e => handleSubmit(e)}> we can also decide to
      use onClick event, which works only on the button, while thsi works on the button and input text field*/}
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* we need to connect the state with the value, we are going to type. since we set our state to an empty
      string, the state will always be empty even if we write smt in our input tag or not becasue react is now
      controlling it and always setting it to description, which stays at the empty string. so we listen for 
      the change event using onChange prop */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // e.target is the whole input tag, while value is the value of the input tag
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    // to render list, we use the map method on the array
    <div className="list">
      <ul>
        {items.map((item) => (
          // name of the component, prop, object
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => {}} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* without the callback fxn react will call the fxn, but we want it to only call it when the 
      event happens */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stat() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}
